# Cotizador navideño · Disponibilidad en vivo e incentivos de ocupación

## Cómo funciona

1. Al llegar al paso **La fecha**, el cotizador pide al script de Google los eventos de los tres calendarios de The Lounge (1 nov 2026 a 31 dic 2026).
2. Pinta noviembre y diciembre con el nivel de demanda de cada día y bloquea los días en que la sede elegida no tiene ningún horario libre para el momento elegido (desayuno, brunch, almuerzo o cena).
3. Al elegir el día, muestra las horas de inicio posibles y tacha las ocupadas. Usa la duración real del paquete: 3 horas en Marbella y Obarrio, 5 en San Francisco.
4. En el resultado, la estampilla dice si la sede está disponible en esa fecha y hora, y la tabla del estimado aplica el incentivo de ocupación si corresponde. El mensaje de WhatsApp lleva fecha, hora, disponibilidad e incentivo para que el equipo solo confirme.
5. Mientras el script no esté conectado, el cotizador funciona en **modo demo** con ocupación simulada y lo indica con una etiqueta "Demo".

## Conectar los calendarios reales (15 minutos)

1. En Google Calendar de The Lounge, abrir la configuración de cada calendario de sede y copiar su **ID de calendario** (sección "Integrar el calendario").
2. Entrar a script.google.com con esa misma cuenta, crear un proyecto nuevo y pegar el contenido de `Code.gs`.
3. Pegar los tres IDs en `CALENDARS`. Si quieren registrar las cotizaciones, crear una hoja de cálculo y pegar su ID en `SHEET_ID`.
4. Implementar → Nueva implementación → Aplicación web → Ejecutar como: Yo · Acceso: Cualquier persona → Implementar y autorizar.
5. Copiar la URL que termina en `/exec` y en `the-lounge-cotizador-navidad.html` cambiar:

```js
const CAL = { mode: 'apps-script', scriptUrl: 'https://script.google.com/macros/s/XXXX/exec', ... };
```

6. Subir el HTML actualizado. La etiqueta del paso de fecha pasará de "Demo" a "En vivo".

Los calendarios siguen privados: el script corre con la cuenta de The Lounge y solo entrega horas ocupadas, sin títulos ni invitados al navegador.

## Lógica de ocupación e incentivos

Nivel de demanda por día (0 baja, 1 media, 2 alta):

| Factor | Efecto |
|---|---|
| Jueves, viernes o sábado | +2 |
| Miércoles o domingo | +1 |
| Del 10 al 19 de diciembre (pico registrado en 2025) | +1 |
| Antes del 16 de noviembre | −1 |
| La sede ya tiene un evento ese día | +1 |

Incentivos (en `INCENTIVOS`, dentro del HTML). **Los porcentajes son valores de ejemplo y deben confirmarse con The Lounge antes de publicar:**

| Regla | Ejemplo | Cuándo aplica |
|---|---|---|
| Fecha de baja afluencia | 10% | El día elegido tiene demanda 0 |
| Horario de día | 5% | Desayuno, brunch o almuerzo |
| Reserva temprana | 5% | Se cotiza antes del 31 de octubre |
| Tope acumulado | 15% | Suma máxima de incentivos |

El incentivo se aplica solo al paquete, no al pastel, y siempre se muestra como "sujeto a confirmación". Para desactivarlo: `INCENTIVOS.activo = false`.

## Horas de inicio por momento

Desayuno 7, 8 o 9 a.m. · Brunch 10 u 11 a.m. · Almuerzo 12 o 1 p.m. · Cena 6, 7 u 8 p.m. Se ajustan en `MOMENTO_HORAS`.
