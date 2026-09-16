# Logo de campaña "Este año, celebra arriba" · Prompt de generación

## Antes del prompt: qué se genera y qué no

El logo de campaña tiene dos partes y solo una se genera con inteligencia artificial.

| Parte | Cómo se produce |
|---|---|
| **Emblema** (la llave dentro de la estampilla) | Con el prompt de abajo, luego vectorizado |
| **Lettering** ("Navideño y Fin de Año" + "Este año, celebra arriba") | Se compone con las tipografías de la campaña: Alex Brush, Bebas Neue y Poppins |

Los generadores deforman las letras, inventan acentos y no respetan la eñe. El lockup ya existe en la presentación y en los paquetes del cliente, así que el prompt pide el emblema **sin una sola letra**.

---

## Concepto del emblema

Una estampilla con borde perforado (el recurso que ya recorre toda la campaña) que contiene una llave **apuntando hacia arriba**, con su etiqueta colgando. La llave hacia arriba resuelve el doble sentido del mensaje: la llave del espacio privado y el "arriba" de celebrar a lo grande, que en The Lounge además es literal porque sus sedes están en pisos altos.

---

## Prompt principal · inglés (recomendado)

```
Flat vector logo emblem, centred, on a plain white background. A vertical postage-stamp
badge with a scalloped perforated edge. Inside the badge, a single antique door key standing
upright, pointing up, rendered as a clean two-colour silhouette: circular bow at the top,
slender shaft, two simple teeth at the bottom left. A small rectangular gift tag hangs from
the key's bow on a short taut string, tilted slightly, completely blank. Strictly two flat
colours plus the background: deep burgundy and warm gold. No gradients, no shadows, no
outlines of varying weight, no 3D, no texture. Crisp geometric shapes, generous even margins
inside the badge, perfectly symmetrical vertical axis, heraldic and confident. Designed to
stay legible at 24 pixels. Luxury hospitality brand mark, seasonal but not kitsch.
No text, no letters, no numbers, no words, no monogram, no watermark.
```

**Negative prompt**

```
text, letters, lettering, words, numbers, monogram, initials, watermark, signature,
gradient, drop shadow, 3D, bevel, emboss, photorealistic, glossy, plastic, sketch, painterly,
snowflakes, santa, holly, bells, bright primary red, kelly green, rainbow, multiple keys,
keychain, keyboard key, car key, padlock, cluttered, busy detail, thin hairlines, mockup,
business card, presentation slide, multiple logo variations in a grid
```

## Prompt principal · español

```
Emblema de logo vectorial plano, centrado, sobre fondo blanco liso. Una estampilla vertical
con borde perforado de dientes redondeados. Dentro de la estampilla, una sola llave antigua
de puerta en posición vertical, apuntando hacia arriba, dibujada como silueta limpia a dos
colores: ojo circular arriba, caña delgada, dos dientes simples abajo a la izquierda. Del ojo
de la llave cuelga, de un hilo corto y tenso, una etiqueta rectangular pequeña, ligeramente
inclinada y completamente en blanco. Estrictamente dos colores planos más el fondo: vino
profundo y dorado cálido. Sin degradados, sin sombras, sin relieve, sin 3D, sin textura.
Formas geométricas nítidas, márgenes amplios y parejos dentro de la estampilla, eje vertical
perfectamente simétrico, aire heráldico y seguro. Debe seguir siendo legible a 24 píxeles.
Marca de campaña de hospitalidad de lujo, navideña sin caer en lo cursi.
Sin texto, sin letras, sin números, sin palabras, sin monograma.
```

---

## Variantes para pedir en la misma tanda

Generar las tres y comparar. Cambia solo la frase del contenedor:

**B · Anillo de laurel.** Sustituir la estampilla por: `a slender circular ring of two symmetrical pine sprigs meeting at the bottom, open at the top`. Más clásico, funciona mejor bordado o estampado en seco.

**C · Sello de cera.** Sustituir por: `a wax seal disc with softly irregular edges and a subtle pressed rim`. El más premium; es el que mejor dialoga con la campaña de abogados.

**D · Solo la llave.** Quitar el contenedor por completo: `no frame, no badge, the key and its blank tag alone, isolated`. Es la versión para usar pequeña, como sticker de story o marca de agua.

---

## Especificación técnica

- **Formato de salida:** 1:1, el emblema ocupando cerca del 70% del cuadro, fondo blanco plano.
- **Colores finales:** vino `#6D1B1B` y dorado `#C8A15B`. Versión sobre verde pino `#163529`: la llave en dorado y la estampilla en crema `#F4EADA`.
- **Vectorizar siempre.** La imagen generada es referencia, no entregable. Se pasa a trazo (Illustrator con Calco de imagen, o un vectorizador) y se corrigen los nodos a mano hasta que la simetría sea exacta.
- **Versiones a derivar del vector:** a dos colores, a un color en vino, a un color en crema para fondos oscuros, y en negativo perforado para grabado o estampado en seco.
- **Prueba de tamaño mínimo:** imprimir a 12 mm de alto. Si los dientes de la llave o las perforaciones se cierran, engrosarlos antes de aprobar.

## Cómo se arma el logo completo

Tres disposiciones, todas con el mismo emblema:

1. **Vertical principal.** Emblema arriba, debajo "Navideño y Fin de Año" en el lockup existente, y abajo "Este año, celebra arriba." en Bebas Neue con "arriba" en Alex Brush. Es la firma de cierre de pieza.
2. **Horizontal.** Emblema a la izquierda y el lockup a la derecha, alineados por el eje óptico. Para encabezados de email y firmas de correo.
3. **Emblema solo.** Variante D, para avatar, sticker, etiqueta física y grabado en la llave de cortesía si deciden producirla.

El espacio libre alrededor del logo es siempre el ancho del ojo de la llave.
