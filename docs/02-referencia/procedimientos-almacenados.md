---
title: "Catálogo de procedimientos almacenados"
description: "Referencia: procedimientos de la cola, resultados, monitoreo y versionado del RPA."
category: "Referencia"
c4Level: "Code"
position: 5
tags: [referencia, sql, procedimientos]
---

# Catálogo de procedimientos almacenados

## B. Catálogo de procedimientos almacenados

Los propósitos se infieren del nombre y del contexto de llamada; deben validarse contra el SQL oficial.

| Categoría | Procedimiento | Propósito inferido |
|---|---|---|
| Monitoreo y Command Center | `GET_RPA_MONITOR_DATA` | Obtiene información agregada de monitor. |
| Catálogo y estado de agentes | `RPA_BYID_GET` | Obtiene un agente por identificador. |
| Catálogo y estado de agentes | `RPA_BYKEY_GET` | Obtiene entidad RPA por clave. |
| Histórico, consulta y métricas | `RPA_GET_HISTORICAL` | Consulta histórico de agentes. |
| Solicitudes y procesamiento | `RPA_INSERT` | Registra entidad/agente RPA. |
| Solicitudes y procesamiento | `RPA_ISPROCESSING` | Determina si un request continúa procesándose. |
| Monitoreo y Command Center | `RPA_MONITOR_ROOM_ACTIONS_GETBYSTATUS` | Obtiene acciones por estado. |
| Monitoreo y Command Center | `RPA_MONITOR_ROOM_ACTIONS_GET_HISTORICAL` | Consulta histórico de acciones. |
| Monitoreo y Command Center | `RPA_MONITOR_ROOM_ACTIONS_INSERT` | Registra acción remota. |
| Monitoreo y Command Center | `RPA_MONITOR_ROOM_ACTIONS_UPDATESTATUS` | Actualiza estado de acción. |
| Monitoreo y Command Center | `RPA_MONITOR_ROOM_RPASHELL_GET` | Consulta heartbeats/Shells. |
| Monitoreo y Command Center | `RPA_MONITOR_ROOM_RPASHELL_GET_HISTORICAL` | Consulta histórico de heartbeats. |
| Monitoreo y Command Center | `RPA_MONITOR_ROOM_RPASHELL_GET_PAGINATION` | Pagina Shells. |
| Monitoreo y Command Center | `RPA_MONITOR_ROOM_RPASHELL_INSERT` | Inserta heartbeat/diagnóstico. |
| Solicitudes y procesamiento | `RPA_PROCESSING_CLOSING` | Cierra procesamiento. |
| Histórico, consulta y métricas | `RPA_REQUEST_COUNT_BY_SERVICEID` | Cuenta requests por servicio/estado. |
| Solicitudes y procesamiento | `RPA_REQUEST_GET` | Obtiene request. |
| Histórico, consulta y métricas | `RPA_REQUEST_GET_HISTORICAL` | Consulta histórico de requests. |
| Solicitudes y procesamiento | `RPA_REQUEST_INSERT` | Inserta solicitud en cola. |
| Histórico, consulta y métricas | `RPA_REQUEST_PAGINATION_GET_BY_STATUS` | Pagina requests por estado. |
| Solicitudes y procesamiento | `RPA_REQUEST_REACTIVATE` | Reactiva solicitudes. |
| Solicitudes y procesamiento | `RPA_REQUEST_RELEASE` | Libera solicitudes. |
| Solicitudes y procesamiento | `RPA_REQUEST_RELEASE_BY_SERVICEID` | Libera solicitudes antiguas por servicio. |
| Solicitudes y procesamiento | `RPA_REQUEST_VALIDATE_EXPIRATION_POLICY` | Evalúa expiración/clonación. |
| Resultados | `RPA_RESULT_BYFILTER_GET` | Obtiene resultados por filtro. |
| Resultados | `RPA_RESULT_CLONE` | Clona resultado previo. |
| Resultados | `RPA_RESULT_GET` | Obtiene resultado. |
| Resultados | `RPA_RESULT_INSERT` | Inserta resultado. |
| Catálogo y estado de agentes | `RPA_RUNNING_LIST_GET` | Lista agentes activos. |
| Versionado | `RPA_SHELL_VERSION_CHECK` | Valida versión disponible/activa. |
| Versionado | `RPA_SHELL_VERSION_GET` | Obtiene detalle de versión. |
| Versionado | `RPA_SHELL_VERSION_GET_PAGINATION` | Pagina versiones. |
| Versionado | `RPA_SHELL_VERSION_INSERT` | Registra paquete/versión. |
| Versionado | `RPA_SHELL_VERSION_UPDATE` | Actualiza estado/metadatos de versión. |
| Catálogo y estado de agentes | `RPA_STATUSBYNAME_UPDATE` | Actualiza estado por nombre. |
| Catálogo y estado de agentes | `RPA_STATUS_BY_IDSERVICES` | Obtiene estados por IdService. |
| Solicitudes y procesamiento | `RPA_TO_PROCESS_GET` | Punto de entrada de la selección; delega en `RPA_TO_PROCESS_GET_ASYNC`. |
| Solicitudes y procesamiento | `RPA_TO_PROCESS_GET_ASYNC` | Implementa el algoritmo de selección: estado, ventana, filtros, roles, anti-duplicado y registro de instancia. |
| Monitoreo y Command Center | `RPA_VERIFY_MONITOR_CONFIGURATION` | Valida configuración de monitor. |
| Catálogo y estado de agentes | `RPA_WFS_BY_ROLES_GET` | Obtiene servicios permitidos por roles. |
