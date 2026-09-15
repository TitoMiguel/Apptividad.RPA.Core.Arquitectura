---
title: "Flujos de referencia del paquete"
description: "Referencia: robots de ejemplo incluidos (SUGEF_CIC, VERIFICATE_BUREAU, etc.)."
category: "Referencia"
c4Level: "Operación"
position: 8
tags: [flujos, robots, ejemplos]
---

# Flujos de referencia del paquete

## Flujos de referencia incluidos en el paquete

### SUGEF_CIC

Ejemplo más completo del patrón moderno. Incluye entradas `SUGEF_CIC_AUTORIZAR` y `SUGEF_CIC_CONSULTAR`, un `Main` común y subworkflows para Init, GetWork, KeepAlive, Process, consultar padrón, incluir autorización, generar reporte, validar sesión expirada y operar GAUDI.

### VERIFICATE_BUREAU

Automatiza el SVI del Tribunal Electoral de Panamá: abre sitio, gestiona certificado/autenticación, consulta identidad, extrae información y retorna resultado. Requiere certificados raíz, intermedio y personal, además de conectividad específica.

### ETAX_CONSULTA_CONTRIBUYENTE

Usa máquina de estados, navegador persistente y captcha aprovisionado. `Process.xaml` combina UDC, carga de datos, click, validación, extracción y actualización del captcha.

### EMAIL_ALERT

Consulta buzones, interpreta mensajes, ejecuta sentencias TTY, actualiza XML/UDC, envía notificaciones y persiste resultados.

### DOWNLOAD_FILES

Busca documentos en directorios, clasifica por regex, separa PDF, crea attachments y análisis TTY, copia archivos y notifica por correo.

### Workflows heredados

`CICAutorizacionWF`, `Consulta_CIC_SUGEF`, `Consulta_CIC_SUGEFLogin`, `Consulta_CIC_SUGEFKeepAlive` y `VerificateWF` representan generaciones previas o alternativas. Deben distinguirse del patrón State Machine actual.
