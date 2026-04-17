# NODO Landings

Landings por rubro de NODO (POS + facturación electrónica Paraguay).
HTML + CSS + JS vanilla. Mobile-first. Cero frameworks. Deploy en Cloudflare Pages.

**URL final prevista:** `nodo.com.py/lomiteria`

---

## Estructura

```
nodo-landings/
├── public/
│   ├── _headers              → headers de Cloudflare Pages
│   └── lomiteria/            → primera landing (rubro food)
│       ├── index.html
│       ├── styles.css
│       ├── script.js
│       └── assets/           → fotos, video, logo (ver assets/README.md)
├── README.md                 → este archivo
└── .gitignore
```

Cada landing es una carpeta independiente dentro de `public/`. Para replicar a otro rubro: copiás la carpeta, cambiás textos y fotos.

---

## 1. Previsualizar localmente (elegí UNA opción)

### Opción A — Node (recomendado, 1 comando)

```bash
npx serve public/lomiteria
```

Te abre en `http://localhost:3000`.

### Opción B — Python (ya viene instalado en la mayoría de las PCs)

```bash
cd public/lomiteria
python -m http.server 8000
```

Te abre en `http://localhost:8000`.

### Opción C — Abrir el archivo directo

Doble click a `public/lomiteria/index.html`. Funciona, pero el Meta Pixel y algunas rutas relativas pueden comportarse raro. Para testear bien usá A o B.

---

## 2. Placeholders a reemplazar (IMPORTANTE antes de publicar)

Abrí la landing en el browser; vas a ver los placeholders amarillos rayados con exactamente qué va en cada hueco. Resumen:

### En `public/lomiteria/index.html`

| Qué | Dónde (buscá en el archivo) | Reemplazar por |
|---|---|---|
| **Número WhatsApp** | `595981XXXXXX` (8 ocurrencias) | Número real. Formato `595XXXXXXXXX` sin espacios ni guiones. Usá buscar-y-reemplazar. |
| **Número visible en footer** | `0981 XXX-XXX` | Número real con formato humano. |
| **Meta Pixel ID** | `PIXEL_ID_AQUI` (2 ocurrencias) | ID numérico del Pixel (ej: `1234567890`). |
| **Logo** | `<svg ... >NODO</svg>` dentro del header | Reemplazar por `<img src="assets/logo-nodo.svg" alt="NODO" height="32">` una vez tengas el logo. |
| **Testimonio** | Bloque HTML comentado | Descomentar y completar cuando tengas 1 testimonio real (nombre, negocio, ciudad, frase, foto). |

### En `public/lomiteria/assets/`

Ver `public/lomiteria/assets/README.md` para la lista completa con dimensiones y pesos sugeridos. Archivos mínimos para salir a pautar:

- `hero-combo.jpg` (1200 × 800, < 300 KB)
- `video-30s.mp4` (o cambiar a embed de YouTube en el HTML)
- `og-image.jpg` (1200 × 630, para preview de WhatsApp/FB)
- `favicon.ico`
- `logo-nodo.svg`

---

## 3. Deploy a Cloudflare Pages (5 pasos)

1. **Subí el repo a GitHub** (`git init` → `git add .` → `git commit -m "init"` → `git remote add origin ...` → `git push`).
2. En [Cloudflare Pages](https://pages.cloudflare.com), click **Create a project → Connect to Git → elegí este repo**.
3. **Build settings:**
   - Framework preset: **None**
   - Build command: *(vacío)*
   - Build output directory: `public`
4. Click **Save and Deploy**. Cloudflare te da un dominio tipo `nodo-landings.pages.dev`.
5. **Custom domain:** En el proyecto → Custom domains → Set up a custom domain → `nodo.com.py`. Para que la URL final sea `nodo.com.py/lomiteria`, el DNS de `nodo.com.py` tiene que apuntar al proyecto de Pages (si el dominio ya está en Cloudflare, es 1 clic).

Cada `git push` a `main` dispara un deploy automático.

---

## 4. Replicar a otro rubro (ej: ferretería)

```bash
cp -r public/lomiteria public/ferreteria
```

Luego en `public/ferreteria/`:

1. Editá `index.html`:
   - `<title>` y `<meta description>`
   - Headline del hero
   - Bullets de "qué incluye" (si cambia el combo)
   - "Qué vas a poder hacer" (beneficios del rubro — para ferretería cambiarían a: control de stock, lector de código de barras, factura electrónica SIFEN, reportes, etc.)
   - Precio (si el combo de ese rubro es distinto)
   - FAQ (ver FAQ sugerida por rubro en el prompt base de NodoLanding)
2. Reemplazá fotos en `assets/` por las del rubro nuevo.
3. Actualizá los links de WhatsApp con un mensaje pre-llenado específico del rubro (ej: *"Hola, quiero info del combo para ferretería"*).
4. La URL queda `nodo.com.py/ferreteria` automáticamente (Cloudflare sirve carpetas desde `public/`).

---

## 5. Cambiar precio o teléfono globalmente

- **Teléfono:** buscar-y-reemplazar `595981XXXXXX` en `index.html`.
- **Precio combo:** buscar `1.500.000` en `index.html` (2-3 ocurrencias).
- **Mensualidad:** buscar `150.000` en `index.html`.
- **Color primario:** `--color-primary` en `styles.css` (arriba de todo).

---

## Checklist antes de salir a pautar

- [ ] Número WhatsApp real en todo el HTML.
- [ ] Meta Pixel ID real en los 2 lugares.
- [ ] Foto hero real (no el placeholder rayado).
- [ ] Video 30s listo (MP4 o embed de YouTube).
- [ ] `og-image.jpg` para que el preview en WhatsApp se vea lindo.
- [ ] Probado en celular (el 80% del tráfico viene de ahí).
- [ ] Probaste tocar el botón de WhatsApp y abre con mensaje pre-llenado.
- [ ] Si tenés testimonio, descomentá la sección en HTML.

---

Cualquier duda sobre cómo editar o deployar, abrí este README o pedile a Claude (prompt: *"actuá como NodoLanding y ayudame a..."*).
