# Assets — Taller Contadores Claude Code

## `og-image.jpg` (REQUERIDO antes de compartir)

Imagen que se muestra cuando compartís el link por WhatsApp, Facebook, Twitter, LinkedIn, etc.

**Specs obligatorias:**
- Tamaño: **1200 × 630 px** exactos
- Formato: **JPG** (peso < 300 KB) o PNG (< 500 KB)
- Nombre exacto: **`og-image.jpg`**
- Path: `assets/og-image.jpg`

### Cómo generarla — Prompt para Ideogram (recomendado)

Entrá a [ideogram.ai](https://ideogram.ai) y pegá este prompt. Seleccioná aspect ratio **16:9** (1200×630 aproximado).

```
Editorial-style landscape image, 1200x630 pixels, for a website social 
media preview. Subject: a confident Paraguayan male accountant in his 
early 40s, smiling softly, working at a modern laptop in a warm 
professional office. He wears a clean dress shirt (no tie), with some 
financial reports visible on the screen. The scene is shot from a 
slight angle, giving it a photojournalistic feel.

On the LEFT third of the image: the accountant photo.

On the RIGHT two-thirds: a clean warm cream background (#F5F1E8) with:
- A large Claude Code logo (stylized 8-pointed asterisk/sunburst in 
  coral/terracotta color #CC785C, very recognizable, like the actual 
  Anthropic Claude logo).
- Below the logo, in elegant serif typography (like Fraunces or 
  Tiempos): "Tu estudio contable, reinventado en un sábado."
- Below that, in smaller modern sans-serif: "Taller presencial · 
  Claude Code para contadores · San Lorenzo"
- A small NODO logo placement at the bottom right.

VISUAL STYLE:
- Editorial, warm, sophisticated — like Anthropic's own website.
- Color palette: warm cream background (#F5F1E8 / #EEECE2), coral 
  orange accent (#CC785C), deep charcoal for text (#1A1915).
- Typography: serif for the main headline, sans-serif for supporting 
  text. Clean hierarchy.
- NOT tech-bro, NOT neon, NOT dark-mode startup. Think editorial 
  magazine meets professional firm.
- High-quality, photorealistic for the person, clean vector-like for 
  the logo and text areas.
- Subtle separator between photo and text area (thin coral line or 
  soft gradient).

TECHNICAL:
- Aspect ratio 16:9 or exactly 1200×630.
- Text must be crisp, no errors, Spanish correctly spelled.
- Safe margins: keep all text and key elements within 10% inner margin.
- Readable when scaled down to thumbnail (400×210).
```

### Cómo generarla — Alternativas

**ChatGPT (con generación de imágenes):** pegá el mismo prompt, pedile 16:9 landscape.

**Foto propia + edición en Canva:**
1. Sacate una foto tuya en la oficina (o usá una libre de Unsplash buscando "accountant", "paraguayan business", "latin american professional").
2. Abrí Canva, tamaño custom 1200×630.
3. Lado izquierdo: la foto.
4. Lado derecho: fondo cream #F5F1E8, logo Claude (podés usar el SVG del proyecto), título en Fraunces, subtítulo en Inter.
5. Exportá como JPG, optimizado.

### Dónde guardarla

Una vez tengas el archivo listo (1200×630, JPG, <300KB):

1. Renombrala a **`og-image.jpg`** (exacto, minúsculas).
2. Pegala en esta carpeta: `public/taller-contadores/assets/og-image.jpg`.
3. Hacé git add + commit + push.
4. Esperá ~1 min el deploy de Cloudflare.
5. Probá el preview en: [developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug/) o mandándote el link por WhatsApp a vos mismo.

### Tip: forzar refresco del preview

WhatsApp y Facebook cachean la preview. Si ya lo compartiste con una versión vieja:
- **Facebook / WhatsApp / Instagram:** usá el [Sharing Debugger de Meta](https://developers.facebook.com/tools/debug/) → pegá el URL → click "Scrape Again".
- **Twitter/X:** [Card Validator](https://cards-dev.twitter.com/validator).
- **LinkedIn:** [Post Inspector](https://www.linkedin.com/post-inspector/).

---

## `favicon.ico` (opcional pero recomendado)

Icono que aparece en la pestaña del navegador. 32×32 px idealmente, puede ser el logo de Claude en coral sobre cream. Generalo en [favicon.io](https://favicon.io).

---

## Fotos de expertos (opcional, para reemplazar iniciales)

Si querés cambiar los círculos con iniciales (SB / WC / DA) por fotos reales de los referentes, seguí estos pasos:

### Dónde conseguir fotos (de fuentes públicas oficiales)

| Persona | Fuente recomendada |
|---|---|
| **Santiago Bilinkis** | [bilinkis.com](https://bilinkis.com) → sección "Prensa" o "Media" |
| **Wenceslao Casares** | Foto pública de Wikipedia o su LinkedIn |
| **Dario Amodei** | [anthropic.com/company](https://anthropic.com/company) → press kit / team |

### Specs de cada foto

- **Formato:** JPG (más liviano que PNG)
- **Tamaño recomendado:** 400×400 px cuadrado (se recorta en círculo automáticamente)
- **Peso:** < 80 KB cada una
- **Nombres exactos:** `bilinkis.jpg`, `casares.jpg`, `amodei.jpg`

### Cómo integrarlas

1. Pegá los 3 archivos en esta carpeta (`public/taller-contadores/assets/`).
2. Abrí `public/taller-contadores/index.html`.
3. Buscá los comentarios `<!-- Reemplazar por <img src="..."> cuando tengas foto -->` en cada `.expert-card`.
4. En cada uno:
   - Borrá la línea `<span class="expert-initials">XX</span>`
   - Descomentá el `<img>` de arriba (quitale los signos de comentario `<!--` y `-->`)
5. Hacé `git add` + `commit` + `push`.

### Nota legal

Usar fotos de figuras públicas en marketing puede estar sujeto a restricciones. Idealmente:
- **Fuentes oficiales** (press kits, sitios propios) — la foto suele tener licencia de uso editorial.
- **Atribución** si la fuente lo requiere (raro en press kits pero revisá cada caso).
- **Evitá** fotos de sitios random / stock no autorizado.

En caso de duda, mantené las iniciales — funcionan perfectamente y evitan cualquier problema.
