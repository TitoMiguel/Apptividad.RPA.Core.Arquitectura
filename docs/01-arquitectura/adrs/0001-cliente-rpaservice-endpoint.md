---
title: "ADR-0001: Cliente WCF de RPAService en el Proxy para ejecución local"
description: Decisión de inyectar únicamente el binding y endpoint de RPAService en el Proxy de CrediQuick para habilitar la ejecución local.
category: Explicación
c4Level: General
position: 1
tags: [adr, wcf, rpaservice, local]
---
# ADR-0001: Cliente WCF de RPAService en el Proxy para ejecución local

- **Estado:** Aceptada
- **Contexto:** El proceso que ejecuta `RPAIntegrationCommand` (sentencia 11), hospedado en las
  aplicaciones `Apptividad.TimeToYes.Business` y `Apptividad.TimeToYes.BusinessProxy` de
  CrediquickBridge, necesita un cliente WCF hacia `RPAService`. Si falta, se produce
  `Could not find default endpoint element that references contract 'RPAServiceReference.IRPAService'`,
  que se propaga como *"No hay instancias de RPA disponibles"*.
- **Decisión:** Inyectar **únicamente** el `<binding name="WSHttpBinding_IRPAService">` (con
  `security mode="None"` para HTTP local) y su `<endpoint>` hacia
  `http://localhost/Apptividad.Ozono.RPAService/RPAService.svc` en el `Web.config` del Proxy.
- **Alternativa descartada:** Copiar el `<client>` completo del proyecto Business. Arrastra una
  referencia a un binding Equifax no definido en el Proxy y provoca el error Code 1004.
- **Consecuencias:** El backend local resuelve el endpoint y `GetRPARunning` funciona. Debe
  reciclarse los app pools BusinessProxy/Business/RPAService tras el cambio. Es un ajuste de
  configuración para pruebas locales; no altera el código ni el despliegue oficial.
