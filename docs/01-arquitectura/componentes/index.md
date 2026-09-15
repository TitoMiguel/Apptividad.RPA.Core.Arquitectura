---
title: Componentes del Core
description: Nivel Component (C4). Agrupaciones lógicas de código dentro de los contenedores del Core RPA.
category: Referencia
c4Level: Component
position: 1
tags: [c4, componentes]
---
# Componentes del Core

En el nivel **Component** del Modelo C4 se describen las agrupaciones lógicas de código dentro
de los contenedores. Cada página detalla la responsabilidad de un componente, sus dependencias
y su relación con el resto de la solución.

| Componente | Qué resuelve |
|---|---|
| [RPADroid Shell](/01-arquitectura/componentes/rpadroid-shell) | Aplicación WinForms que hospeda el runtime y gestiona tareas, logs y heartbeat. |
| [Workflows y máquina de estados](/01-arquitectura/componentes/workflows-estados) | Ejecución de robots en XAML/WWF y sus transiciones de estado. |
| [Activities del Core](/01-arquitectura/componentes/activities-core) | Jerarquía de Activities reutilizables y patrón de una CustomActivity. |
| [Automatización web y autenticación externa](/01-arquitectura/componentes/automatizacion-web) | Navegador/EdgeDriver, captcha, certificados y Agente GAUDI. |
| [Attachments y archivos](/01-arquitectura/componentes/attachments) | Adjuntos, PDF, Excel y sistema de archivos. |

Para la ejecución concreta de una solicitud a través de estos componentes, ver
[Flujo end-to-end](/01-arquitectura/flujo-end-to-end).
