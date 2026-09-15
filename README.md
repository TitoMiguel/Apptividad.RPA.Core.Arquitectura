# RPA_Arquitectura — Sitio de documentación técnica del Core RPA

Sitio estático de documentación de la arquitectura del **Core RPA de Apptividad**, organizado con
el **Modelo C4** (niveles de abstracción) y el framework **Diátaxis** (tipos de documentación).
Generador: **VitePress**. Diagramas en **Markdown + Mermaid**. Búsqueda local integrada.

La fuente canónica del contenido es
`E:\RPA\Apptividad.Ozono\Apptividad.Ozono.RPA.UI\Apptividad.Ozono.RPA.Core.Arquitectura.md`,
reorganizada en páginas por nivel C4 y responsabilidad.

## Estructura del repositorio

```text
RPA_Arquitectura/
├── docs/
│   ├── .vitepress/config.mjs        # Configuración: nav, sidebar, búsqueda, Mermaid
│   ├── index.md                     # Portada
│   ├── 01-arquitectura/             # C4: contexto, contenedores, componentes, flujo, diagramas, ADR
│   ├── 02-referencia/               # Diátaxis · Referencia (persistencia, UDC, WCF, SPs, Activities)
│   └── 03-operaciones/              # Diátaxis · Guías/Runbooks (monitoreo, despliegue, soporte)
├── scripts/check-links.mjs          # Validador de enlaces internos (sin red)
├── (Workflow de CI y Pages en la raíz del repo: .github/workflows/rpa-arquitectura-pages.yml)
├── .markdownlint-cli2.jsonc         # Reglas de estilo Markdown
├── .lycheeignore                    # Exclusiones de validación de enlaces (localhost/infra interna)
├── package.json
└── README.md
```

## Requisitos

- **Node.js 18+** (probado con Node 24). No requiere Python.

## Instalar dependencias

```bash
npm install
```

## Ejecutar el sitio localmente

```bash
npm run docs:dev
```

Abre el servidor de desarrollo con recarga en caliente (por defecto en `http://localhost:5173`).

## Construir el sitio estático

```bash
npm run docs:build       # genera docs/.vitepress/dist
npm run docs:preview      # sirve la versión construida para revisión
```

El HTML final queda en `docs/.vitepress/dist/`.

## Validar la documentación

```bash
npm run lint:md          # markdownlint sobre docs/**/*.md y README.md
npm run check:links      # enlaces internos rotos (scripts/check-links.mjs)
npm run docs:build       # el build falla si hay enlaces internos rotos (ignoreDeadLinks: false)
```

La validación de enlaces externos se realiza en CI con **lychee** (ver `la raíz del repo (.github/workflows/rpa-arquitectura-pages.yml)`);
`.lycheeignore` evita falsos positivos de `localhost` e infraestructura interna.

## Incorporar una nueva página

1. Crea el archivo `.md` en la carpeta del nivel C4 correspondiente (`01-arquitectura/`,
   `02-referencia/` o `03-operaciones/`).
2. Añade **frontmatter** consistente:

   ```yaml
   ---
   title: "Título de la página"
   description: "Una frase que resume el contenido."
   category: "Referencia"      # Tutorial | Guía | Referencia | Explicación
   c4Level: "Component"          # General | System Context | Container | Component | Code | Operación
   position: 5
   tags: [etiqueta1, etiqueta2]
   ---
   ```

3. Empieza el cuerpo con un único `# Título` (H1).
4. Enlaza la página en el Sidebar (ver siguiente sección).

## Modificar la navegación

La navegación superior (`nav`) y el menú lateral (`sidebar`) se definen en
`docs/.vitepress/config.mjs`. Para añadir una página al Sidebar, agrega un ítem
`{ text: '...', link: '/ruta/sin-extension' }` en la sección correspondiente. Las rutas usan
URLs limpias (sin `.md` ni `.html`).

## Convenciones

- **Diagramas:** siempre en bloques ```mermaid``` acompañados de una breve explicación textual.
- **Un H1 por página**; el resto de encabezados en H2/H3 (alimentan la tabla de contenidos local).
- **No mezclar niveles C4** ni tipos Diátaxis distintos dentro de una misma página.
- **ADR**: registros inmutables en `01-arquitectura/adrs/`; no se reescriben.

## Publicación en GitHub Pages (con GitHub Actions)

El sitio se publica automáticamente en **GitHub Pages** mediante el workflow ubicado en la
**raíz del repositorio** (los workflows solo se ejecutan desde ahí, no desde subcarpetas):

```text
.github/workflows/rpa-arquitectura-pages.yml
```

- **URL publicada:** `https://titomiguel.github.io/Apptividad.RPA.Core.Arquitectura/`
- **`base` de VitePress:** `/Apptividad.RPA.Core.Arquitectura/` (configurado en `docs/.vitepress/config.mjs`). Si el
  repositorio cambia de nombre, ajusta este valor al nuevo `/<nombre-repo>/`.
- **Disparadores:** cada `push` a `master` que toque `RPA_Arquitectura/**`, o ejecución manual
  desde la pestaña **Actions** (`workflow_dispatch`).
- **Qué hace:** instala dependencias, valida Markdown y enlaces internos, construye el sitio y
  publica `docs/.vitepress/dist` como artefacto de Pages.

### Configuración única en GitHub (una sola vez)

1. En el repositorio: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Asegúrate de que **Actions** esté habilitado (Settings → Actions → General).
3. Haz `push` de la rama `master` con el workflow y la carpeta `RPA_Arquitectura/`. El primer
   despliegue aparecerá en **Actions**; al terminar, la URL queda disponible en Settings → Pages.
