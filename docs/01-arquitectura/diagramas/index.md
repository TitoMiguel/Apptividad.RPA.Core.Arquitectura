---
title: Diagramas
description: Catálogo de diagramas de la arquitectura en Markdown + Mermaid, cada uno con su explicación.
category: Explicación
c4Level: General
position: 5
tags: [diagramas, mermaid, c4]
---
# Diagramas

Todos los diagramas del sitio están en **Markdown + Mermaid** para que se mantengan junto al
contenido y evolucionen con él. Esta página reúne los diagramas transversales; los específicos
de cada sección aparecen dentro de su página correspondiente.

## Contexto del sistema

Representa la solución como una caja y sus relaciones con actores y sistemas externos. Debe leerse
de izquierda a derecha: el analista inicia el análisis en TimeToYes, que orquesta el RPA; el RPA
opera sobre sitios de terceros y devuelve el resultado.

```mermaid
flowchart LR
  Analista([Analista / Sistema consumidor]) --> TTY[TimeToYes]
  TTY --> RPA[Plataforma RPA de Apptividad]
  RPA --> Sitios[(Sitios web de terceros<br/>SUGEF, etc.)]
  RPA --> DB[(Bases Ozono / TimeToYes)]
  RPA --> TTY
  TTY --> Analista
```

Detalle en [Contexto del sistema](/01-arquitectura/contexto-sistema).

## Orquestación end-to-end

Muestra el orden temporal de una solicitud desde TimeToYes hasta el resultado y su retorno. Cada
flecha indica quién inicia la interacción y qué información viaja.

```mermaid
sequenceDiagram
    autonumber
    participant T as TimeToYes
    participant C as RPAIntegrationCommand
    participant S as RPAService
    participant D as Base de datos
    participant R as RPADroid Shell
    participant W as Workflow XAML
    T->>C: Ejecuta sentencia 11 (XMLRequest)
    C->>S: GetRPARunning / RegisterRPARequest
    S->>D: RPA_REQUEST_INSERT (trigger encola en RPA_TO_PROCESS)
    R->>S: GetRPAToProcess (RPA, UserId, ExtendedProperties)
    S->>D: RPA_TO_PROCESS_GET → RPA_TO_PROCESS_GET_ASYNC
    S-->>R: Solicitud asignada
    R->>W: WorkflowInvoker.Invoke (hilo STA)
    W->>S: InsertRPAResult / ClosingRPAProcessing
    S->>D: RPA_RESULT_INSERT + RPA_PROCESSING_CLOSING
    S-->>C: RPAResponse
    C->>T: XMLResponse + estado
```

Detalle en [Flujo end-to-end](/01-arquitectura/flujo-end-to-end).

## Máquina de estados del robot

Transiciones confirmadas contra la implementación (`ConsultaCCSS_SM\Main.xaml`). Un error no fatal
en `GetWork` o `Process` va a `SetStatus` (registra el desenlace y continúa); solo el error fatal
escala a `Recovery`.

```mermaid
stateDiagram-v2
    [*] --> Init
    Init --> GetWork: Success
    Init --> Recovery: Error / FatalError
    GetWork --> Process: Success
    GetWork --> SetStatus: Error
    GetWork --> Recovery: FatalError
    Process --> SetStatus: Success / Error
    Process --> Recovery: FatalError
    SetStatus --> GetWork: Success / Error
    SetStatus --> Recovery: FatalError
    Recovery --> Init: Success
    Recovery --> FinalState: Can't Recover
    FinalState --> [*]
```

Detalle en [Workflows y máquina de estados](/01-arquitectura/componentes/workflows-estados).

## Modelo de datos de la cola

Relación entre las tablas confirmadas por DDL. `RPA_TO_PROCESS` es la cola; `RPA_PROCESSING` evita
la doble toma; `RPA_RESULT` guarda el desenlace.

```mermaid
erDiagram
    RPA ||--o{ RPA_REQUEST : atiende
    RPA_REQUEST ||--o| RPA_TO_PROCESS : encola
    RPA_TO_PROCESS ||--o| RPA_PROCESSING : bloquea
    RPA_REQUEST ||--o| RPA_RESULT : produce
```

Detalle en [Persistencia y cola](/02-referencia/persistencia-cola).
