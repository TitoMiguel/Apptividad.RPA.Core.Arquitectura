---
title: "ADR-0002: Enrutamiento de errores no fatales a SetStatus"
description: Decisión de diseño de la máquina de estados de los robots ante errores no fatales frente a errores fatales.
category: Explicación
c4Level: General
position: 2
tags: [adr, estados, recuperacion]
---
# ADR-0002: Enrutamiento de errores no fatales a SetStatus

- **Estado:** Aceptada (observada en la implementación)
- **Contexto:** Los robots del Core usan una máquina de estados común (Init, GetWork, Process,
  SetStatus, Recovery, FinalState). Es necesario distinguir un error recuperable dentro de la
  transacción de un error que invalida el contexto de la instancia.
- **Decisión:** Un **error no fatal** en `GetWork` o `Process` transita a `SetStatus`, que registra
  el desenlace de la transacción y devuelve el control a `GetWork` para continuar. Solo el **error
  fatal** (`FatalError`) escala a `Recovery`, que intenta recrear el contexto y, si lo logra,
  regresa a `Init`. `FinalState` se alcanza únicamente desde `Recovery` con `Can't Recover`.
- **Evidencia:** Transiciones confirmadas en `ConsultaCCSS_SM\Main.xaml` y en el documento de
  diseño de robots.
- **Consecuencias:** Una instancia no se reinicia por errores de negocio ordinarios; conserva su
  sesión/navegador y sigue atendiendo. El resultado (éxito o fallo) se registra en
  `RPA_RESULT.ISSUCCESSFUL`, no en el estado del request, que se cierra siempre como `COMPLETE`.
