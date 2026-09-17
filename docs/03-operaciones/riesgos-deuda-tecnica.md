---
title: "Riesgos y deuda técnica"
description: "Explicación: riesgos técnicos, hallazgos de consistencia y mejoras arquitectónicas recomendadas."
category: "Explicación"
c4Level: "Operación"
position: 10
tags: [riesgos, deuda-tecnica]
---

# Riesgos y deuda técnica

## Riesgos, deuda técnica y vacíos documentales

### Riesgos técnicos

- **Tecnologías maduras/legadas:** .NET Framework, WCF, WinForms y Thread.Abort.
- **Complejidad de concurrencia:** BackgroundWorker, Thread, Task, COM y UI.
- **Dependencia de UI externa:** DOM, idioma, resolución, ventanas y GPO.
- **Rutas absolutas:** menor portabilidad.
- **Configuración distribuida:** UDC, perfil, config, BAT, DB y sitio.
- **Polling síncrono prolongado:** consumo de threads/conexiones.
- **Detalle de excepciones:** posible exposición interna.
- **Paquetes sin metadatos de build:** no hay csproj, lockfiles ni SBOM.
- **Cobertura no verificable:** TestingActivities no incluidos.
- **Compatibilidad heredada:** referencias IE/MSHTML pueden confundir.

### Hallazgos de consistencia

- El código contiene 31 WebActivities y 37 UtilsActivities.
- `EnqueueProvisioningCaptchaActivity.cs` está en WebActivities, pero declara namespace UtilsActivities.
- Dos archivos poseen un espacio antes de `.cs`, afectando convenciones/tooling.
- Conviven nombres históricos de navegador e implementación Selenium Edge.
- El mecanismo de timeout de `BaseActivity.ExecuteActivityWithTask` debe revisarse porque llamadas de espera aparecen comentadas.

### Mejoras arquitectónicas recomendadas

- Arquitectura versionada junto al código y catálogo automático de assemblies/XAML.
- Incluir `.sln`, `.csproj`, versiones, SBOM y hashes.
- Centralizar secretos y eliminarlos de UDC/logs.
- Migrar gradualmente a APIs asincrónicas y evitar llamadas WCF bloqueadas durante todo el proceso.
- Formalizar cola con lease, visibilidad, retry y dead-letter.
- Reemplazar Thread.Abort por cancelación cooperativa.
- Unificar modelo de threading y aplicar async/await cuando sea seguro.
- Formalizar estados y transiciones en un contrato único.
- Health checks para WCF, SQL, EdgeDriver, sitios y certificados.
- Pruebas de contrato, integración y smoke tests por robot.
- Firma de código y validación de integridad de paquetes/driver.
- Métricas estructuradas y correlación distribuida.
