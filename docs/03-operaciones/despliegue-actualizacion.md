---
title: "Despliegue, actualización y compatibilidad"
description: "Guía operativa: publicación, proceso de actualización (Updater) y compatibilidad."
category: "Guía"
c4Level: "Operación"
position: 5
tags: [despliegue, actualizacion, updater, compatibilidad]
---

# Despliegue, actualización y compatibilidad

## Despliegue, instalación, actualización y compatibilidad

### Publicación y estructura

La guía describe un pipeline Jenkins para compilar y publicar RPADroid. El paquete base contiene archivos comunes y puede incluir ensamblados específicos de clientes, que deben eliminarse antes de entregar a otro cliente.

```text
C:\Apptividad\Runtime\
├── RPADroid\
│   ├── Apptividad.Ozono.RPA.UI.exe
│   ├── Apptividad.Ozono.RPA.UI.exe.config
│   ├── *.dll
│   ├── workflows y recursos
│   ├── @CloseRPAShellAndIE.bat
│   ├── @CloseIEAndRestartRPAShell.bat
│   └── utilidades
├── Backups\
├── Logs\
├── RPACacheFolder\
├── Captcha\
├── Images\
└── RPAResultHTML\
```

### Proceso de actualización

1. Detener Shell y navegadores mediante BAT.
2. Respaldar versión actual.
3. Descargar/descomprimir nuevo paquete.
4. Copiar binarios a ruta fija.
5. Restaurar o crear `.exe.config` del cliente.
6. Configurar BAT con IdService requeridos.
7. Validar versión, login, seguridad y ejecución.
8. Mantener rollback con backup.

También se propone una tarea `RPA_RESTART` en Windows Task Scheduler para reinicio diario, además de UDC de programación diaria/semanal.

**Componente `Apptividad.Ozono.RPA.Updater`.** La aplicación de la actualización la realiza un ejecutable de consola independiente (`Apptividad.Ozono.RPA.Updater.exe`). Su punto de entrada distingue dos modos: en el modo normal ejecuta `UpdateRPAShellVersion.Run`, que descarga y prepara la nueva versión; en el modo aplicador (`RPAShellVersionApplier`) se ejecuta desde una carpeta temporal con un argumento específico y aplica los archivos sobre la instalación en uso, guiándose por un manifiesto (`RPAShellVersionUpdateManifest`). En el modo aplicador no consulta servicios ni configuraciones externas, lo que permite reemplazar los binarios del Shell mientras este está detenido. El control de versiones se apoya en los procedimientos `RPA_SHELL_VERSION_*`.

### Compatibilidad

| Componente | Requisito/estado |
|---|---|
| Sistema operativo | Windows 10 o superior; factibilidad documentada en Windows Server 2025. |
| Runtime | .NET Framework 4.8 / CLR 4.x para la versión documentada 3.0.3.6. |
| Navegador | Microsoft Edge Chromium de 64 bits. |
| Driver | Misma versión mayor que Edge. |
| Hardware base | 4 núcleos ~3.5 GHz, 8 GB RAM y SSD 120 GB por una instancia. |
| Red | Servicios Apptividad, sitio objetivo, driver, SMTP/IMAP y VPN cuando aplique. |
| Sesión | Sesión Windows interactiva para UI Automation, certificado y navegador. |

La guía de instalación identifica RPADroid 3.0.3.8; el documento de compatibilidad evalúa 3.0.3.6. El snapshot contiene cambios de 2026, pero sin metadatos de ensamblado no se puede asignar una versión única.
