---
title: "Catálogo de operaciones WCF"
description: "Referencia: las 41 operaciones del contrato IRPAService agrupadas por función."
category: "Referencia"
c4Level: "Code"
position: 4
tags: [referencia, wcf, irpaservice, operaciones]
---

# Catálogo de operaciones WCF

## A. Catálogo de operaciones WCF

| Categoría | Operación | Retorno | Parámetros |
|---|---|---|---|
| Catálogo, seguridad y estado de agentes | `GetRPAByKey` | `RPAEntityResponse` | `RPAEntityRequest pRPAEntityRequest` |
| Catálogo, seguridad y estado de agentes | `GetRPAByRoles` | `List<RPAByRolesResponse>` | `RPAByRolesRequest pRPAByRolesRequest` |
| Catálogo, seguridad y estado de agentes | `GetUserRPAPrivileges` | `RPAUserPrivilegesResponse` | `RPARequest pRPARequest` |
| Catálogo, seguridad y estado de agentes | `RPAEntityInsert` | `MessageResponse` | `RPAEntityRequest pRPAEntityRequest` |
| Catálogo, seguridad y estado de agentes | `RPAStatusByNameUpdate` | `MessageResponse` | `RPAEntityRequest pRPAEntityRequest` |
| Ciclo de vida de solicitudes y resultados | `ClosingRPAProcessing` | `RPAInfoResponse` | `RPAInfoRequest pRPAInfoRequest` |
| Ciclo de vida de solicitudes y resultados | `GetRPAInfo` | `RPAInfoResponse` | `RPAInfoRequest pRPAInfoRequest` |
| Ciclo de vida de solicitudes y resultados | `GetRPAResponseByFilter` | `List<RPAResponse>` | `RPAByFilterRequest pRPAByFilterRequest` |
| Ciclo de vida de solicitudes y resultados | `GetRPAResultByFilter` | `List<RPAInfoResponse>` | `RPAByFilterRequest pRPAByFilterRequest` |
| Ciclo de vida de solicitudes y resultados | `GetRPAToProcess` | `RPAInfoResponse` | `RPAInfoRequest pRPAInfoRequest` |
| Ciclo de vida de solicitudes y resultados | `InsertRPAInfo` | `RPAInfoResponse` | `RPAInfoRequest pRPAInfoRequest` |
| Ciclo de vida de solicitudes y resultados | `InsertRPAResult` | `RPAInfoResponse` | `RPAInfoRequest pRPAInfoRequest` |
| Ciclo de vida de solicitudes y resultados | `RPAInfoValidateExpirationPolicy` | `RPAInfoResponse` | `RPAInfoRequest pRPAInfoRequest` |
| Ciclo de vida de solicitudes y resultados | `RPAResultClone` | `RPAInfoResponse` | `RPAInfoRequest pRPAInfoRequest` |
| Ciclo de vida de solicitudes y resultados | `ReactivateRPARequest` | `RPAInfoResponse` | `—` |
| Ciclo de vida de solicitudes y resultados | `RegisterRPARequest` | `RPAResponse` | `RPARequest pRPARequest` |
| Ciclo de vida de solicitudes y resultados | `ReleaseRPARequest` | `RPAInfoResponse` | `—` |
| Diagnóstico y configuración | `TestConfiguration` | `string` | `string pOption` |
| Diagnóstico y configuración | `echo` | `string` | `—` |
| Histórico, paginación y administración de cola | `GetRPAMonitorRoomActionsHistorical` | `RPAMonitorRoomActionsHistoricalResponse` | `RPAMonitorRoomActionsHistoricalRequest pRequest` |
| Histórico, paginación y administración de cola | `GetRPAMonitorRoomRPAShellHistorical` | `RPAMonitorRoomRPAShellHistoricalResponse` | `RPAMonitorRoomRPAShellHistoricalRequest pRequest` |
| Histórico, paginación y administración de cola | `GetRPAMonitorRoomRPAShellPagination` | `RPAMonitorRoomRPAShellPaginationResponse` | `RPAMonitorRoomRPAShellPaginationRequest pRequest` |
| Histórico, paginación y administración de cola | `GetRPARequestCountByServiceId` | `RPARequestCountByServiceIdResponse` | `RPARequestCountByServiceIdRequest pRequest` |
| Histórico, paginación y administración de cola | `GetRPARequestHistorical` | `RPARequestHistoricalResponse` | `RPARequestHistoricalRequest pRequest` |
| Histórico, paginación y administración de cola | `GetRPARequestPaginationByStatus` | `RPARequestPaginationByStatusResponse` | `RPARequestPaginationByStatusRequest pRequest` |
| Histórico, paginación y administración de cola | `GetRPARequestReleaseByServiceId` | `RPARequestReleaseByServiceIdResponse` | `RPARequestReleaseByServiceIdRequest pRequest` |
| Histórico, paginación y administración de cola | `GetRPARunningHistorical` | `RPARunningHistoricalResponse` | `RPARunningHistoricalRequest pRequest` |
| Monitoreo, heartbeat y control remoto | `GetRPAById` | `RPARunningResponse` | `RPAInfoRequest pRPAInfoRequest` |
| Monitoreo, heartbeat y control remoto | `GetRPAMonitorDetail` | `RPAMonitorResponse` | `RPAMonitorRequest pRPAMonitorRequest` |
| Monitoreo, heartbeat y control remoto | `GetRPAMonitorRoomActionsResponse` | `RPAMonitorRoomActionsResponse` | `RPAMonitorRoomActionsRequest vRPAMonitorRoomActionsRequest` |
| Monitoreo, heartbeat y control remoto | `GetRPAMonitorRoomRPAShellResponse` | `RPAMonitorRoomRPAShellResponse` | `string Status` |
| Monitoreo, heartbeat y control remoto | `GetRPARunning` | `RPARunningResponse` | `—` |
| Monitoreo, heartbeat y control remoto | `GetRPAStatusByIdServices` | `RPAStatusByIdServicesResponse` | `RPAStatusByIdServicesRequest pRPAMonitorRequest` |
| Monitoreo, heartbeat y control remoto | `InsertRPAMonitorRoomActionsResponse` | `RPAMonitorRoomActionsResponse` | `RPAMonitorRoomActionsRequest vRPAMonitorRoomActionsRequest` |
| Monitoreo, heartbeat y control remoto | `InsertRPAMonitorRoomRPAShellResponse` | `MessageResponse` | `RPAMonitorRoomRPAShellRequest vRPAMonitorRoomRPAShellRequest` |
| Monitoreo, heartbeat y control remoto | `UpdateRPAMonitorRoomActionsResponse` | `MessageResponse` | `RPAMonitorRoomActionsRequest vRPAMonitorRoomActionsRequest` |
| Versionado de RPADroid Shell | `CheckRPAShellVersion` | `RPAShellVersionResponse` | `RPAShellVersionRequest pRequest` |
| Versionado de RPADroid Shell | `GetPaginationRPAShellVersion` | `RPAShellVersionResponse` | `RPAShellVersionRequest pRequest` |
| Versionado de RPADroid Shell | `GetRPAShellVersion` | `RPAShellVersionResponse` | `RPAShellVersionRequest pRequest` |
| Versionado de RPADroid Shell | `InsertRPAShellVersion` | `RPAShellVersionResponse` | `RPAShellVersionRequest pRequest` |
| Versionado de RPADroid Shell | `UpdateRPAShellVersion` | `RPAShellVersionResponse` | `RPAShellVersionRequest pRequest` |
