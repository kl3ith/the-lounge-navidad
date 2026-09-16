# Lockup "Paquete Corporativo Navideño y Fin de Año" · Prompt de generación

Es la placa vino con el lettering que aparece en la portada de la presentación, en la pantalla del cotizador y en las cuatro portadas de los PDFs de paquetes. Este documento trae el prompt para generarla como imagen y la ruta alternativa, que es más segura.

---

## Advertencia que hay que leer antes de generar

El texto tiene **dos eñes** y **un acento**: Navideño y Año. Ningún generador de imágenes los escribe bien de forma consistente. Lo que va a pasar:

- "Navideño" sale como *Navideno*, *Navidenõ*, *NavideAo* o con la tilde flotando sobre la letra equivocada.
- "Año" sale como *Ano*, *Aňo* o *Ao*.

Por eso hay dos caminos. El primero es el recomendado.

**Camino 1 · Extraer el lockup original.** La pieza ya existe a buena resolución en los PDFs del cliente, en `Paquetes de Navidad/Paquetes Navidad 2026/`. Se recorta de ahí y se limpia. Es el original, con las eñes correctas, y no hay nada que revisar.

**Camino 2 · Generar solo la placa y rotular encima.** Se genera el soporte vacío con el prompt B y el texto se compone con las tipografías de la campaña. Control total y cero riesgo ortográfico.

**Camino 3 · Generar el lockup completo** con el prompt A. Solo si lo quieren explorar como referencia estética. Hay que revisar letra por letra y asumir que se descarta la mayoría de los resultados.

---

## Prompt A · Lockup completo (con texto, revisar siempre)

```
Vintage Christmas typographic logo lockup on a deep burgundy rectangular plate, tilted about
two degrees counter-clockwise, with a soft drop shadow, isolated on a transparent background.

Text, exactly as written, in three tiers:
Tier 1, small, centred, cream-coloured condensed sans-serif capitals with wide letter
spacing: "PAQUETE CORPORATIVO"
Tier 2, dominant, a large flowing cream calligraphic script with high contrast and elegant
thin flourishes, the capital N with a generous open swash: "Navideño"
Tier 3, baseline-aligned mixed setting, slightly overlapping the script above it: a small
lowercase dusty-rose "y", then bold dusty-rose italic sans-serif "Fin de", then a large cream
calligraphic script word with a sweeping capital A: "Año"

Spanish orthography is mandatory: the tilde over the n in Navideño and the tilde over the n
in Año must both be present and correctly placed. No other characters.

Deep burgundy plate, cream lettering, dusty-rose accents, flat colours, no gradients, no
texture, no ornaments, no snowflakes, no holly, no frame. Clean, confident, festive but
refined. Crisp vector-like edges. Centred with even margins.
```

**Negative prompt**

```
misspelled text, gibberish text, extra letters, missing letters, Navideno, Ano, wrong accents,
double vowels, duplicated words, extra words, English text, watermark, signature, gradient,
3D, bevel, glossy, photorealistic, snowflakes, holly, bells, santa, ribbons, frame, border,
busy background, mockup, multiple variations in a grid, cropped text
```

## Prompt B · Solo la placa, sin texto (recomendado para producción)

```
An empty deep burgundy rectangular plate with very slightly rounded corners, tilted about two
degrees counter-clockwise, with a soft diffuse drop shadow beneath it, completely blank with
no text or markings, flat solid colour with a barely perceptible paper grain, isolated on a
transparent background, centred, generous even margins, crisp clean edges, vector-like.
Landscape proportion, roughly three units wide by two units tall.
No text, no letters, no numbers, no ornaments, no border, no pattern.
```

Sobre esa placa se compone el texto con las tipografías de la campaña:

| Línea | Tipografía | Color |
|---|---|---|
| PAQUETE CORPORATIVO | Bebas Neue o Poppins 600, versalitas, interletrado amplio | Crema `#F6ECD9` |
| Navideño | Alex Brush, tamaño dominante | Crema `#F6ECD9` |
| y | Poppins 500 | Rosa `#E6A6A6` |
| Fin de | Poppins 700 | Rosa `#E6A6A6` |
| Año | Alex Brush, mayor que Navideño | Crema `#F6ECD9` |

---

## Especificación de la pieza

- **Placa:** vino `#6D1B1B`, inclinación de −2.5 grados, esquinas apenas redondeadas, sombra suave y difusa.
- **Proporción:** horizontal, cerca de 3 por 2.
- **Aire interno:** el alto de la palabra "y" por cada lado.
- **Versión sobre crema** (la de las portadas de los PDFs): sin placa, "Paquete Corporativo" y "Navideño" en verde pino `#1F4A3A`, y "y Fin de Año" en vino `#6D1B1B`.
- **Versión sobre verde** (la de la presentación y el cotizador): con placa vino y lettering crema.
- **Versión a un color:** todo en crema, para fondos fotográficos oscuros.
- **Exportar:** SVG para web y PNG con transparencia a 2000 píxeles de ancho para piezas.
- **Espacio libre:** el alto de la línea "Paquete Corporativo" alrededor de toda la placa.

## Verificación obligatoria antes de aprobar

1. Leer "Navideño" letra por letra y confirmar la tilde sobre la n.
2. Leer "Año" y confirmar la tilde sobre la n.
3. Confirmar que no sobra ni falta ninguna palabra.
4. Ver la pieza al 15% de tamaño: "Paquete Corporativo" debe seguir leyéndose.
5. Probarla sobre los tres fondos de la campaña: crema, verde pino y foto oscura.
