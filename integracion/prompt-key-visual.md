# Key Visual "La llave" · Prompt de imagen de referencia

> **Estado: producido.** La imagen final está en `assets/key-visual-navideno.jpg` (master en PNG al lado) y ya vive en el slide del Key Visual. Este documento queda como registro y para generar las variantes de formato.

Para sustituir la composición en código del slide 7 de la presentación. El marco del slide es vertical 4:5, así que la imagen se genera en esa proporción y la tipografía se monta encima, no dentro del prompt.

**Regla de producción:** la etiqueta que cuelga de la llave se genera **en blanco**. Ahí se rotula después el texto de cada nicho (Confidencial, Meta cumplida, Sin guardia). Una sola imagen sirve para las doce campañas.

---

## Prompt principal · versión en inglés (recomendada)

```
Editorial still-life photograph, vertical 4:5. A single ornate antique brass door key
(skeleton key, warm brushed gold, not a keyboard key) lying diagonally across a sheet of
warm cream textured paper. Tied to the key's bow with fine natural twine hangs one small
blank kraft-paper gift tag, empty and unmarked, tilted slightly toward the camera and fully
in focus. Down the left third of the frame run two vertical ribbons, slightly rumpled: one
deep pine-green velvet, one burgundy wine-red satin. Upper right: two or three fresh pine
sprigs and one small matte-gold ornament. Deep background: soft out-of-focus warm golden
bokeh lights. Color story strictly cream, deep pine green, burgundy and brushed gold.
Lighting: single soft window light from the upper left, warm and low-key, gentle falloff,
subtle specular highlights along the brass. Shallow depth of field, 85mm macro look, f/2.8.
Generous empty cream negative space across the lower half and the upper centre for
typography. Sophisticated, understated, hospitality-brand luxury, quiet and tactile.
No text, no lettering, no numbers, no logos, no watermark.
```

**Negative prompt**

```
text, lettering, typography, words, numbers, watermark, logo, signature, hands, fingers,
people, faces, keyboard key, computer key, car key, bunch of keys, multiple keys, snow,
snowflakes, santa, bright primary red, kelly green, plastic, glitter, confetti overload,
cluttered composition, busy background, harsh flash, HDR, oversaturated, cartoon, 3D render,
illustration
```

## Prompt principal · versión en español

```
Fotografía editorial de bodegón, vertical 4:5. Una sola llave antigua de puerta en latón
dorado satinado (llave de cerradura clásica, no una tecla), apoyada en diagonal sobre una
hoja de papel texturado color crema cálido. Del ojo de la llave cuelga, atada con hilo
natural, una pequeña etiqueta de papel kraft completamente en blanco, sin ninguna marca,
ligeramente inclinada hacia la cámara y nítida. Por el tercio izquierdo del cuadro bajan
dos cintas verticales algo arrugadas: una de terciopelo verde pino profundo y otra de satén
rojo vino. Arriba a la derecha, dos o tres ramitas de pino fresco y un adorno pequeño en
dorado mate. Al fondo, luces cálidas doradas desenfocadas. Paleta estricta: crema, verde
pino profundo, vino y dorado satinado. Luz de una sola ventana desde arriba a la izquierda,
cálida, de tono bajo, con caída suave y brillos sutiles sobre el latón. Profundidad de campo
corta, look de macro 85 mm, f/2.8. Amplio espacio vacío de papel crema en la mitad inferior
y en el centro superior para montar tipografía. Elegante, contenido, lujo de marca de
hospitalidad, silencioso y táctil. Sin texto, sin letras, sin números, sin logos.
```

---

## Paleta exacta (para corrección de color después)

| Color | Hex |
|---|---|
| Papel crema | `#F4EADA` |
| Verde pino profundo | `#163529` |
| Verde pino | `#1F4A3A` |
| Vino | `#6D1B1B` |
| Dorado | `#C8A15B` |

Si la imagen sale con verdes o rojos fuera de esa gama, corregir con una capa de tono sobre la imagen antes de montarla.

---

## Variantes de formato

Mismo prompt, cambiando la proporción y la zona de aire:

- **Slide 7 y pieza madre:** 4:5 vertical, aire en la mitad inferior.
- **Post de Instagram:** 1:1, aire en la franja inferior.
- **Story y reel:** 9:16, aire en el tercio inferior y la llave más arriba en el cuadro.
- **Encabezado de email y banner:** 16:9, la llave a la izquierda y todo el aire a la derecha.

## Variante B · estilo grabado

Si prefieren mantener el lenguaje de las ilustraciones grabadas de los PDFs (las cajas de regalo y los copos en blanco y negro) en lugar de fotografía:

```
Vintage engraved illustration of an ornate antique brass door key with a small blank paper
tag hanging from it, fine cross-hatching and stipple shading in the style of a 19th-century
catalogue engraving, black ink on warm cream paper, high contrast, no colour, no text,
centred, generous margins.
```

Esa versión se colorea después: el trazo en vino sobre el papel crema.

## Cómo montarla en el slide

En `presentacion-celebra-arriba.html`, la capa `.l-key` del bloque `#kv` contiene hoy la llave en SVG. Se sustituye por `<img>` con la foto y se conserva el resto de las capas: la cinta, el sello con el lockup y el mensaje madre abajo. El parallax por capas sigue funcionando porque la imagen hereda el `data-depth` de la capa.
