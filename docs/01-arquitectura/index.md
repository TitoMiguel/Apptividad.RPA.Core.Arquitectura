---
title: "Arquitectura del Core RPA"
description: "Visión general, objetivo, alcance y nivel de evidencia de la arquitectura del Core RPA de Apptividad."
category: "Explicación"
c4Level: "General"
position: 1
tags: [arquitectura, resumen, alcance]
---

# Arquitectura del Core RPA

## Resumen ejecutivo

El Core RPA de Apptividad es una plataforma empresarial de automatización construida principalmente sobre **C# y .NET Framework 4.8**, con una arquitectura desacoplada basada en solicitudes persistentes, servicios **WCF**, ejecución local mediante una aplicación **Windows Forms** denominada **RPADroid Shell**, y lógica de robot declarada en **XAML** sobre **Windows Workflow Foundation**.

No es únicamente una colección de robots. Es un ecosistema integrado por:
- **TimeToYes (TTY)** como orquestador de modelos, sentencias, reglas y contexto de negocio.
- **RPAIntegrationCommand** como adaptador de la Sentencia 11 hacia el backend RPA.
- **RPAService** como frontera WCF para solicitudes, resultados, agentes, monitoreo, seguridad y versiones.
- **Base de datos de Ozono** como cola durable, repositorio de resultados, estado de agentes, histórico y Monitor Room.
- **RPADroid Shell** como host de ejecución en una máquina Windows cercana a los recursos del cliente.
- **Windows Workflow Foundation/XAML** como motor de orquestación interna de cada robot.
- **Activities Core** como biblioteca reutilizable de automatización web, escritorio, archivos, PDF, Excel, correo, captcha, UDC y persistencia.
- **Microsoft Edge, Edge WebDriver y Selenium** como mecanismo principal de automatización web actual.
- **Windows UI Automation** para certificados, diálogos nativos, Agente GAUDI y aplicaciones de escritorio.
- **UDC** como configuración dinámica por servicio, modelo, ambiente, categoría y perfil de usuario.
- **RPA Command Center/Monitor Room** como plano de observabilidad y control remoto.

El procesamiento es **asincrónico en el plano de ejecución**: la solicitud se registra en una cola y un agente disponible la toma. Sin embargo, `RegisterRPARequest` implementa una **espera síncrona con polling** para devolver el resultado al consumidor dentro del tiempo configurado. Esta dualidad explica gran parte del comportamiento de timeouts, saturación, concurrencia y capacidad.

## Objetivo, alcance y límites

El objetivo es explicar de forma integral cómo está construido y cómo opera el Core RPA de Apptividad, desde la invocación en un modelo TTY hasta la ejecución del robot, la interacción con aplicaciones externas, la persistencia del resultado y el monitoreo operativo.

El alcance incluye:
- Arquitectura lógica, física y de ejecución.
- Capas de software, proyectos, namespaces y responsabilidades.
- Diferencia entre lenguaje, runtime, framework, protocolos, formatos y librerías.
- Contratos WCF y flujo de servicios.
- Cola de solicitudes, persistencia y procedimientos almacenados.
- RPADroid Shell, administración de sesiones, tareas, heartbeat y comandos remotos.
- Workflows XAML, máquina de estados y Activities personalizadas.
- Configuración mediante UDC, seguridad, roles y perfiles de usuario.
- Automatización web con Edge/Selenium y automatización de escritorio con UI Automation.
- Archivos, attachments, PDF, Excel, correo, captcha, certificados y firma digital.
- Instalación, compatibilidad, soporte, observabilidad, rendimiento y riesgos.

Límites de la evidencia:
- La consolidación inicial (junio de 2026) se basó en un paquete de código sin `.sln`, `.csproj` ni esquema SQL. La revisión de septiembre de 2026 amplió esa base con los proyectos de la solución (`E:\RPA\Apptividad.Ozono`, `E:\RPA\Apptividad.CrediQuick`) y con el esquema versionado (`E:\RPA\Apptividad.DataBase`); por ello, la estructura de proyectos, el DDL y el código de los procedimientos almacenados quedaron confirmados.
- Algunas versiones exactas de paquetes y ciertas opciones de compilación no se documentan en este archivo por no ser relevantes para la arquitectura.
- El proyecto de pruebas (`TestingActivities`) no forma parte del alcance revisado, por lo que la cobertura de pruebas no se verificó.
- Existen referencias históricas a Internet Explorer y a componentes Droid legados; el código vigente utiliza principalmente Edge/Selenium y RPADroid Shell.
- Las afirmaciones calificadas como **inferencia** se derivan del código y de la combinación de fuentes, no de un contrato formal completo.

## Fuentes analizadas y nivel de evidencia

| Nivel | Significado | Aplicación |
|---|---|---|
| **Confirmado por código** | Existe implementación observable en el snapshot. | Clases, métodos, argumentos, estados, llamadas, procedimientos y dependencias. |
| **Confirmado por documentación** | Está descrito en una guía o diseño oficial suministrado. | Requisitos, instalación, operación, convenciones y procesos. |
| **Inferencia técnica controlada** | Se deduce de nombres, llamadas y flujo. | Propósito de entidades no incluidas, hosting y clasificación arquitectónica. |

Resumen cuantitativo del snapshot:

| Métrica | Valor |
|---|---:|
| Archivos C# analizados | 180 |
| Líneas C# aproximadas | 50,143 |
| Workflows XAML analizados | 44 |
| Líneas XAML aproximadas | 190,740 |
| WebActivities encontradas | 31 |
| UtilsActivities encontradas | 37 |
| Operaciones del contrato WCF interno | 41 |
| Procedimientos almacenados invocados desde `RpaProcess` | 39 |

En la revisión de septiembre de 2026 se incorporó como fuente el esquema de base de datos versionado en `E:\RPA\Apptividad.DataBase`. Con ello, la estructura de las tablas `RPA_REQUEST`, `RPA_RESULT`, `RPA_TO_PROCESS`, `RPA_PROCESSING` y `RPA`, antes documentada como modelo conceptual, pasa a estar **confirmada por el DDL**. La lógica de selección de trabajo se confirmó leyendo el código de los procedimientos `RPA_TO_PROCESS_GET` y `RPA_TO_PROCESS_GET_ASYNC`.
