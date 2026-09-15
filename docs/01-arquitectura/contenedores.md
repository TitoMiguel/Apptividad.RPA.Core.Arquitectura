---
title: "Contenedores"
description: "Nivel Container (C4): inventario de proyectos desplegables y la capa WCF (contratos, implementación, proxy y API)."
category: "Referencia"
c4Level: "Container"
position: 3
tags: [c4, contenedores, wcf, inventario]
---

# Contenedores

## Inventario de la solución y componentes de código

La solución está organizada en proyectos independientes con límites claros por namespace, verificados directamente en los archivos `.csproj` del código fuente. La siguiente tabla resume los componentes que participan en el flujo principal.

| Módulo/proyecto | Tipo | Responsabilidad |
|---|---|---|
| `Apptividad.TimeToYes.Command.APPTIVIDAD` | Integración TTY | `RPAIntegrationCommand`, adaptador de la Sentencia 11. |
| `Apptividad.Ozono.RPAServiceContracts` | Contrato WCF | Interfaz `IRPAService` con las 41 operaciones del dominio RPA. |
| `Apptividad.Ozono.RPAImpl` | Implementación WCF | Clase `RPAService : IRPAService`; delega en `RpaProcess`. |
| `Apptividad.Ozono.RPAService` | Host `.svc` | Publica el servicio WCF; contiene `RPAService.svc`, `Web.config` y transformaciones por ambiente. |
| `Apptividad.Ozono.RPAServiceProxy` | Cliente WCF | Clase `RPA`; encapsula el proxy y aborta el canal ante excepciones. |
| `Apptividad.Ozono.RPA.Api` | Fachada WCF/Web | Expone un subconjunto de operaciones y pruebas (`echo`, `TestConfiguration`) en JSON. |
| `Apptividad.Ozono.RPA` | Core compartido | Procesos (`RpaProcess`), modelos, excepciones, BaseActivities y utilidades. |
| `Apptividad.Ozono.RPA.UI` | Aplicación WinForms | RPADroid Shell: login, tareas, settings, logs, heartbeat y ejecución. |
| `Apptividad.Ozono.RPA.Updater` | Ejecutable de consola | Aplica la actualización de versión del RPADroid Shell (ver sección 22.2). |
| `Apptividad.Ozono.RPA.WebActivities` | Biblioteca WWF | Activities de navegador y DOM. Referenciada por los robots (uso intensivo). |
| `Apptividad.Ozono.RPA.UtilsActivities` | Biblioteca WWF | Activities de servicios, archivos, correo, PDF, UDC y captcha. Referenciada por los robots (uso intensivo). |
| `Apptividad.Ozono.RPA.DesktopActivities` | Biblioteca WWF | Activities de automatización de escritorio (UI Automation). Referenciada por los robots. |
| `Apptividad.Ozono.RPA.ExcelActivities` | Biblioteca WWF | Activities de lectura y generación de Excel. Referenciada por los robots. |
| `Apptividad.TimeToYes.RPAWorkFlows` | Workflows XAML | Robots y máquinas de estado por servicio. |
| `Apptividad.TimeToYes.RPAWorkFlows.Utils` | Workflows XAML | Subworkflows compartidos: `Init`, `Recovery`, `SetStatus`, `InitWebBrowser`, `LoadUrlBase`, `ValidateMaxRetry`, `ValidateWebSite`, `ResolveCaptcha`. |
| `Apptividad.TimeToYes.RPA.TTYActivities` | Biblioteca WWF | Activities de retorno hacia TTY: `CreateAnalysisActivity`, `CreateAttachmentActivity`, `ExecuteSentenceActivity`. |
| `Apptividad.OzonoStation.Web.UI` (`RPAMonitorNEWController`) | Web MVC | Implementa el RPA Command Center (ver sección 19). |
| `Apptividad.Ozono.RPA.Resources` | Recursos | Mensajes localizados y textos del Core. |

**Bibliotecas de Activities especializadas.** La solución incluye además `SATServicesActivities`, `TerminalActivities`, `IBMDataManagerActivities`, `ArtificialIntelligenceActivities` y `Workflow.Activities`. De estas, solo `SATServicesActivities` aparece referenciada por algunos robots (flujos SAT). Para las demás **no se evidencia participación** en los workflows de robots revisados; se consideran bibliotecas de capacidades específicas, no parte del flujo principal.

### Dependencias internas relacionadas

El Core se apoya en un conjunto de proyectos y servicios internos. Los siguientes están presentes en la solución y fueron verificados en el código:

- `Apptividad.Ozono.DataContracts` (carpeta `RPA`): contratos que atraviesan las capas, entre ellos `RPAMessage`, `RPAInfoRequest`, `RPAInfoResponse`, `RPAWebModel`, `RPARequest`, `RPAResponse` y `RPARunningResponse`.
- `Apptividad.Ozono.DataModel`: `DataContext` (`OzonoProviderModelDataContext`) y clases generadas para los procedimientos almacenados.

Los siguientes se consumen a través de proxies o referencias y su implementación reside fuera del ámbito del Core:

- `Apptividad.Ozono.BusinessServiceProxy`: lectura y actualización de UDC.
- `AuthenticationServiceProxy` y `SecurityServiceProxy`: autenticación, SSO y autorización.
- `Apptividad.CrediQuick.*`: infraestructura de TimeToYes/CrediQuick, modelos, `CQCommand` y persistencia de análisis.
- `Apptividad.Ozono.FileService`: servicio de archivos usado indirectamente por paquetes y attachments.

## Capa WCF: contratos, implementación, proxy y API

### Componentes

| Componente | Rol | Detalle |
|---|---|---|
| `IRPAService` (proyecto `RPAServiceContracts`) | Contrato interno | Define 41 operaciones con `[OperationContract]` en `IRPAService.cs`. |
| `RPAImpl.RPAService` (proyecto `RPAImpl`) | Implementación | Clase `Apptividad.Ozono.RPAImpl.RPAService : IRPAService` con `[ServiceBehavior(ConcurrencyMode.Multiple, InstanceContextMode.PerCall, IncludeExceptionDetailInFaults = true)]`. Delega toda la lógica en `Apptividad.Ozono.RPA.RpaProcess`. |
| `RPAService.svc` (proyecto `RPAService`) | Host WCF | Proyecto de publicación que activa la clase `RPAImpl.RPAService`. Incluye `Web.config` con el binding `WSHttpBinding_IRPAService` y transformaciones por ambiente. |
| `RPAServiceProxy.RPA` | Wrapper cliente | Clase `RPA` en `RPAServiceProxy\RPA.cs`; crea el cliente, invoca la operación y ejecuta `Abort()` ante excepción. Contrato `RPAServiceReference.IRPAService`. |
| `Apptividad.Ozono.RPA.Api.RPA` | Fachada reducida | Expone eco, pruebas, registro de request, agentes y respuestas. |

### Concurrencia y estado

El servicio es por llamada y admite concurrencia múltiple. El código advierte que no deben mantenerse variables globales de estado en el servicio. La fuente de verdad es la base de datos y los objetos de request/response.

- Las operaciones deben ser reentrantes o aislar su estado.
- Los clientes WCF deben cerrar o abortar correctamente el canal.
- Los bindings, AppPool/IIS y SQL deben dimensionarse para llamadas largas.
- `IncludeExceptionDetailInFaults = true` facilita diagnóstico, pero debe revisarse en producción.

### Agrupación funcional de operaciones

| Grupo | Cantidad | Propósito |
|---|---:|---|
| Catálogo, seguridad y estado de agentes | 5 | Resolver roles, privilegios, entidades y estado nominal. |
| Ciclo de vida de solicitudes y resultados | 12 | Registrar, tomar, cerrar, consultar, liberar, reactivar, expirar y clonar. |
| Diagnóstico y configuración | 2 | Validar endpoint, logging, Watchman y correo. |
| Histórico, paginación y administración de cola | 8 | Consultar históricos, paginar, contar y liberar. |
| Monitoreo, heartbeat y control remoto | 9 | Consultar agentes, heartbeat y acciones del Command Center. |
| Versionado de RPADroid Shell | 5 | Registrar, validar, actualizar y listar paquetes/versiones. |

### Diferencia entre servicio WCF interno, proxy y fachada API

El término **API** no representa una tecnología única dentro de esta solución:

| Elemento | Interfaz técnica | Consumidores principales | Observación |
|---|---|---|---|
| `IRPAService` / `RPAService.svc` | Contrato WCF con operaciones SOAP según el binding configurado | TTY, RPADroid Shell, Command Center y servicios internos | Es la superficie completa del dominio RPA. |
| `RPAServiceProxy` | Cliente WCF generado y encapsulado | Código .NET interno | Gestiona creación del canal y `Abort()` cuando la llamada falla. |
| `Apptividad.Ozono.RPA.Api.IRPA` | Servicio WCF con `WebInvoke` JSON para `echo` y `TestConfiguration`, más operaciones de contrato | Integradores o consumidores que requieren una fachada reducida | No debe asumirse que toda la solución sea REST; solo ciertas operaciones declaran URI y formato JSON. |
| Procedimientos almacenados | Interfaz SQL interna | `RpaProcess` y procesos autorizados | Constituyen una API de persistencia, no una API HTTP. |

Por tanto, **WCF** es el framework de comunicación, **SOAP/HTTP o WebInvoke/JSON** son posibles formas de transporte/exposición, y el **proxy** es el cliente .NET que abstrae el canal. Los archivos de configuración (`RPAServiceProxy\app.config` y `RPAService\Web.config` con sus transformaciones por ambiente) definen el binding `WSHttpBinding_IRPAService`; los protocolos, la seguridad de transporte y los tamaños máximos concretos dependen del ambiente y deben confirmarse en el `*.config` correspondiente.
