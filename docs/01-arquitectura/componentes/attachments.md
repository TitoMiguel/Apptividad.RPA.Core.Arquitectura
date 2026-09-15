---
title: "Attachments y archivos"
description: "Nivel Component (C4): adjuntos, PDF, Excel y sistema de archivos como parte de la orquestación."
category: "Referencia"
c4Level: "Component"
position: 6
tags: [componente, attachments, pdf, excel]
---

# Attachments y archivos

## Attachments, documentos, PDF, Excel y archivos

### Attachments

- Descarga y validación de attachments de TTY/Ozono.
- Filtros por tipo, modelo, fecha, extensión y tamaño.
- Conversión bytes/Base64.
- Creación de documentos desde imágenes.
- Compresión de PDF/imágenes.
- Reportes y archivos temporales.
- Carga por HTML input o diálogo nativo.
- Logs y capturas como attachments técnicos.

### PDF

| Librería | Uso |
|---|---|
| iTextSharp | Crear, firmar, combinar, copiar páginas y manipular PDF. |
| PdfPig | Extraer y analizar texto/layout. |
| ExpertPdf.HtmlToPdf | Convertir HTML a PDF. |
| BouncyCastle | Certificados X.509 y criptografía para firma. |

`SplitPDFActivity` identifica páginas iniciales por regex, crea documentos de destino y copia páginas hasta la siguiente coincidencia. Si solo genera un archivo, lo elimina porque no hubo división útil.

### Excel

Los XAML y el código referencian FlexCel y modelos Excel. Las Activities obtienen plantillas, agregan datos y administran workbooks. `BaseExcelActivity` contiene cierre explícito para prevenir procesos huérfanos.

### Sistema de archivos y rutas

- `C:\Apptividad\Runtime\` — raíz operativa.
- `C:\Apptividad\Runtime\RPADroid\` — instalación fija del Shell.
- `C:\Apptividad\Runtime\RPACacheFolder\` — caché.
- `C:\Apptividad\Runtime\Captcha\` — imágenes captcha.
- `C:\Apptividad\Runtime\Images\` — imágenes técnicas.
- `C:\Apptividad\Runtime\RPAResultHTML\` — HTML de resultados/errores.
- `C:\ApptividadAttachments\` — attachments predeterminados.

Las rutas absolutas reducen portabilidad. La guía advierte que mover `C:\Apptividad\Runtime\RPADroid` puede romper carga de librerías y scripts.
