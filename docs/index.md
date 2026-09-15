---
title: Documentación de Arquitectura del Core RPA
description: Sitio técnico de la arquitectura del Core RPA de Apptividad, organizado con el Modelo C4 y el framework Diátaxis.
layout: home
hero:
  name: Core RPA de Apptividad
  text: Arquitectura técnica
  tagline: Orquestación TimeToYes → RPA → TimeToYes, documentada con el Modelo C4 y Diátaxis.
  actions:
    - theme: brand
      text: Empezar por la arquitectura
      link: /01-arquitectura/
    - theme: alt
      text: Flujo end-to-end
      link: /01-arquitectura/flujo-end-to-end
features:
  - title: Nivel System Context
    details: Actores, sistemas externos, límites y capas de la solución.
    link: /01-arquitectura/contexto-sistema
  - title: Nivel Container
    details: Proyectos desplegables y la capa WCF (contratos, proxy y API).
    link: /01-arquitectura/contenedores
  - title: Nivel Component
    details: RPADroid Shell, workflows, Activities y automatización web.
    link: /01-arquitectura/componentes/
  - title: Referencia técnica
    details: Persistencia y cola, UDC, operaciones WCF, SPs y catálogo de Activities.
    link: /02-referencia/
  - title: Operación y runbooks
    details: Monitoreo, recuperación, despliegue y diagnóstico de soporte.
    link: /03-operaciones/
  - title: Diagramas
    details: Todos los diagramas en Markdown + Mermaid, con su explicación.
    link: /01-arquitectura/diagramas/
---

## Cómo está organizado este sitio

La documentación se estructura según el **Modelo C4** (de lo general a lo específico) y el
framework **Diátaxis** (según el propósito del lector):

- **01 · Arquitectura** — visión general, contexto del sistema, contenedores, componentes y el flujo end-to-end. Incluye los diagramas y los registros de decisiones (ADR).
- **02 · Referencia** — información técnica precisa y consultable: persistencia y cola, UDC, operaciones WCF, procedimientos almacenados, workflows y Activities.
- **03 · Operaciones** — guías y runbooks: monitoreo, recuperación ante errores, despliegue, rendimiento y soporte.

El contenido proviene del documento canónico `Apptividad.Ozono.RPA.Core.Arquitectura.md`, verificado contra el código y la base de datos.
