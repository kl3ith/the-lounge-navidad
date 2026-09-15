/**
 * THE LOUNGE PANAMÁ · Puente entre el cotizador navideño y Google Calendar
 * ---------------------------------------------------------------------------
 * Se despliega como "Aplicación web" desde la cuenta de Google de The Lounge.
 * El cotizador lo consulta por JSONP; los calendarios NO tienen que hacerse públicos.
 *
 * Acciones:
 *   ?action=freebusy&sede=all|obarrio|marbella|sf&from=2026-11-01&to=2027-01-01
 *       → { busy: { obarrio:[{s,e}], marbella:[...], sf:[...] } }  (ISO 8601)
 *   ?action=lead&nombre=..&empresa=..&personas=..&sede=..&paquete=..&fecha=..&hora=..&estimado=..&incentivo=..
 *       → guarda una fila en la hoja de leads (opcional) y responde { ok:true }
 *
 * Pasos de despliegue (una sola vez):
 *   1. En Google Calendar, tener un calendario por sede (el que ya usan para reservas).
 *      Copiar el ID de cada uno: Configuración del calendario → "Integrar el calendario" → ID.
 *   2. Ir a script.google.com → Nuevo proyecto → pegar este archivo completo.
 *   3. Rellenar CALENDARS con los tres IDs. Opcional: SHEET_ID con el ID de una hoja para leads.
 *   4. Implementar → Nueva implementación → Tipo: Aplicación web →
 *      "Ejecutar como": Yo · "Quién tiene acceso": Cualquier persona → Implementar.
 *      Autorizar los permisos cuando lo pida.
 *   5. Copiar la URL del web app (termina en /exec) y pegarla en el cotizador:
 *      const CAL = { mode:'apps-script', scriptUrl:'https://script.google.com/macros/s/.../exec', ... }
 *   6. Cada vez que se edite este archivo: Implementar → Administrar implementaciones → editar → Nueva versión.
 */

const CALENDARS = {
  obarrio:  'PEGAR_ID_CALENDARIO_OBARRIO@group.calendar.google.com',
  marbella: 'PEGAR_ID_CALENDARIO_MARBELLA@group.calendar.google.com',
  sf:       'PEGAR_ID_CALENDARIO_SAN_FRANCISCO@group.calendar.google.com'
};
const SHEET_ID = '';            // opcional: ID de una hoja de cálculo para registrar cotizaciones
const SHEET_TAB = 'Leads Navidad';
const TZ = 'America/Panama';

function doGet(e) {
  const p = (e && e.parameter) || {};
  let out;
  try {
    if (p.action === 'freebusy')      out = freebusy(p.sede || 'all', p.from, p.to);
    else if (p.action === 'lead')     out = guardarLead(p);
    else                              out = { ok: true, servicio: 'The Lounge · cotizador navideño', acciones: ['freebusy', 'lead'] };
  } catch (err) {
    out = { error: String(err) };
  }
  const json = JSON.stringify(out);
  if (p.callback) {
    return ContentService.createTextOutput(p.callback + '(' + json + ')').setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
}

function freebusy(sede, from, to) {
  const desde = from ? new Date(from + 'T00:00:00-05:00') : new Date();
  const hasta  = to   ? new Date(to   + 'T00:00:00-05:00') : new Date(desde.getTime() + 90 * 86400e3);
  const sedes = sede === 'all' ? Object.keys(CALENDARS) : [sede];
  const busy = {};
  sedes.forEach(function (k) {
    const id = CALENDARS[k];
    if (!id || id.indexOf('PEGAR_ID') === 0) { busy[k] = []; return; }
    const cal = CalendarApp.getCalendarById(id);
    if (!cal) { busy[k] = []; return; }
    busy[k] = cal.getEvents(desde, hasta).map(function (ev) {
      if (ev.isAllDayEvent()) {
        const s = ev.getAllDayStartDate(), e2 = ev.getAllDayEndDate();
        return { s: s.toISOString(), e: e2.toISOString(), allDay: true, t: ev.getTitle() };
      }
      return { s: ev.getStartTime().toISOString(), e: ev.getEndTime().toISOString(), t: ev.getTitle() };
    });
  });
  return { busy: busy, generado: new Date().toISOString(), tz: TZ };
}

function guardarLead(p) {
  if (!SHEET_ID) return { ok: true, guardado: false };
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sh = ss.getSheetByName(SHEET_TAB);
  if (!sh) {
    sh = ss.insertSheet(SHEET_TAB);
    sh.appendRow(['Fecha registro', 'Nombre', 'Empresa', 'Personas', 'Momento', 'Sede', 'Paquete', 'Fecha evento', 'Hora', 'Estimado + ITBMS', 'Incentivo']);
  }
  sh.appendRow([
    Utilities.formatDate(new Date(), TZ, 'yyyy-MM-dd HH:mm'),
    p.nombre || '', p.empresa || '', p.personas || '', p.momento || '', p.sede || '', p.paquete || '',
    p.fecha || '', p.hora || '', p.estimado || '', p.incentivo ? (Math.round(p.incentivo * 100) + '%') : ''
  ]);
  return { ok: true, guardado: true };
}

/** Prueba rápida desde el editor: Ejecutar → probar */
function probar() {
  Logger.log(JSON.stringify(freebusy('all', '2026-11-01', '2027-01-01')));
}
