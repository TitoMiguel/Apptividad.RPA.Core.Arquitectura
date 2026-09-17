import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid({
  title: 'Arquitectura Core RPA',
  description: 'Documentación técnica del Core RPA de Apptividad (Modelo C4 + Diátaxis).',
  lang: 'es-CR',
  // Ruta base para GitHub Pages de proyecto: https://titomiguel.github.io/Apptividad.RPA/
  base: '/Apptividad.RPA.Core.Arquitectura/',
  srcDir: '.',
  cleanUrls: true,
  ignoreDeadLinks: false,
  lastUpdated: true,
  themeConfig: {
    outline: { level: [2, 3], label: 'En esta página' },
    search: { provider: 'local' },
    nav: [
      { text: 'Arquitectura', link: '/01-arquitectura/' },
      { text: 'Referencia', link: '/02-referencia/' },
      { text: 'Operación', link: '/03-operaciones/' },
      { text: 'Diagramas', link: '/01-arquitectura/diagramas/' }
    ],
    sidebar: [
      {
        text: '01 · Arquitectura',
        collapsed: false,
        items: [
          { text: 'Visión general', link: '/01-arquitectura/' },
          { text: 'Contexto del sistema', link: '/01-arquitectura/contexto-sistema' },
          { text: 'Contenedores', link: '/01-arquitectura/contenedores' },
          { text: 'Flujo end-to-end', link: '/01-arquitectura/flujo-end-to-end' },
          {
            text: 'Componentes',
            collapsed: false,
            items: [
              { text: 'Índice de componentes', link: '/01-arquitectura/componentes/' },
              { text: 'RPADroid Shell', link: '/01-arquitectura/componentes/rpadroid-shell' },
              { text: 'Workflows y máquina de estados', link: '/01-arquitectura/componentes/workflows-estados' },
              { text: 'Activities del Core', link: '/01-arquitectura/componentes/activities-core' },
              { text: 'Automatización web y autenticación', link: '/01-arquitectura/componentes/automatizacion-web' },
              { text: 'Attachments y archivos', link: '/01-arquitectura/componentes/attachments' }
            ]
          },
          { text: 'Diagramas', link: '/01-arquitectura/diagramas/' },
          {
            text: 'Decisiones (ADR)',
            collapsed: true,
            items: [
              { text: 'Índice de ADR', link: '/01-arquitectura/adrs/' },
              { text: 'ADR-0001 · Cliente RPAService', link: '/01-arquitectura/adrs/0001-cliente-rpaservice-endpoint' },
              { text: 'ADR-0002 · Errores no fatales', link: '/01-arquitectura/adrs/0002-error-nofatal-setstatus' }
            ]
          }
        ]
      },
      {
        text: '02 · Referencia',
        collapsed: false,
        items: [
          { text: 'Índice de referencia', link: '/02-referencia/' },
          { text: 'Persistencia y cola', link: '/02-referencia/persistencia-cola' },
          { text: 'Configuración UDC', link: '/02-referencia/configuracion-udc' },
          { text: 'Operaciones WCF', link: '/02-referencia/operaciones-wcf' },
          { text: 'Procedimientos almacenados', link: '/02-referencia/procedimientos-almacenados' },
          { text: 'Workflows XAML', link: '/02-referencia/workflows-xaml' },
          { text: 'Catálogo de Activities', link: '/02-referencia/catalogo-activities' },
          { text: 'Trazabilidad de la evidencia', link: '/02-referencia/trazabilidad-fuentes' }
        ]
      },
      {
        text: '03 · Operación',
        collapsed: false,
        items: [
          { text: 'Índice de operación', link: '/03-operaciones/' },
          { text: 'Monitoreo y Command Center', link: '/03-operaciones/monitoreo-command-center' },
          { text: 'Errores y recuperación', link: '/03-operaciones/errores-recuperacion' },
          { text: 'Seguridad', link: '/03-operaciones/seguridad' },
          { text: 'Despliegue y actualización', link: '/03-operaciones/despliegue-actualizacion' },
          { text: 'Rendimiento y escalabilidad', link: '/03-operaciones/rendimiento-escalabilidad' },
          { text: 'Estándares de desarrollo', link: '/03-operaciones/estandares-desarrollo' },
          { text: 'Flujos de referencia', link: '/03-operaciones/flujos-referencia' },
          { text: 'Runbook de soporte', link: '/03-operaciones/runbook-soporte' },
          { text: 'Riesgos y deuda técnica', link: '/03-operaciones/riesgos-deuda-tecnica' }
        ]
      }
    ],
    docFooter: { prev: 'Anterior', next: 'Siguiente' },
    footer: {
      message: 'Documentación técnica interna del Core RPA de Apptividad.',
      copyright: 'Fuente canónica: Apptividad.Ozono.RPA.Core.Arquitectura.md'
    }
  },
  mermaid: {}
})
