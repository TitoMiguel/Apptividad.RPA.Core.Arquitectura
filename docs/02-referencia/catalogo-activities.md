---
title: "Catálogo completo de Activities"
description: "Referencia: WebActivities y UtilsActivities con sus argumentos declarados."
category: "Referencia"
c4Level: "Code"
position: 7
tags: [referencia, activities, catalogo]
---

# Catálogo completo de Activities

## D. Catálogo completo de Activities

Los argumentos son los declarados directamente por cada clase. Además heredan argumentos y comportamiento de su BaseActivity.

### D.1 WebActivities

#### AuthenticateDigitalSignatureActivity

- **Archivo:** `AuthenticateDigitalSignatureActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.WebActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 695 líneas
- **Propósito:** Autenticarse en firma digital. Utilizado en el RPA de CICOC_REPORTE_CREDITICIO (clientes: MONIFAICR, UNICOMERCR), para firmar la declaración jurada en la aplicación de escritorio de “Agente GAUDI” del BCCR.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `OutArgument` | `bool` | `OutIsSuccessDigitalSignature` |
  | `OutArgument` | `string` | `OutErrorMessage` |

#### ClickElementActivity

- **Archivo:** `ClickElementActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.WebActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 94 líneas
- **Propósito:** Hacer click a un elemento HTML por identificador y esperar que recargue la página.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InElementIdentifier` |
  | `InArgument` | `Boolean?` | `InNewWindowsAvailableOPTIONAL` |

#### ClickElementByAttributeValueActivity

- **Archivo:** `ClickElementByAttributeValueActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.WebActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 97 líneas
- **Propósito:** Hacer click a un elemento HTML por nombre atributo y valor de atributo.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InAttributeIdentifier` |
  | `InArgument` | `string` | `InValueIdentifier` |
  | `InArgument` | `string` | `InTagIdentifier` |
  | `InArgument` | `Boolean?` | `InWithoutLoadingOPTIONAL` |

#### ClickElementByRegexExpressionActivity

- **Archivo:** `ClickElementByRegexExpressionActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.WebActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 106 líneas
- **Propósito:** Hace click al primer elemento que coincida con la expresión regular establecida en el argumento de InElementRegexExpression.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InElementRegexExpression` |
  | `InArgument` | `string` | `InTagElementOPTIONAL` |
  | `InArgument` | `string` | `InHTMLBaseElementIdentifierOPTIONAL` |
  | `InArgument` | `Boolean?` | `InWithoutLoadingOPTIONAL` |

#### ClickElementWithoutLoadingActivity

- **Archivo:** `ClickElementWithoutLoadingActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.WebActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 70 líneas
- **Propósito:** Hacer click a un elemento HTML por identificador y no esperar que recargue la página.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InElementIdentifier` |

#### ClickValidatingElementsActivity

- **Archivo:** `ClickValidatingElementsActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.WebActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 183 líneas
- **Propósito:** Hacer click a un elemento HTML por identificador y para los casos donde la página no recarga, pero si se actualiza algún elemento.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InElementIdentifier` |
  | `InArgument` | `string` | `InExistingElementsComparisonOperatorOPTIONAL` |
  | `InArgument` | `int?` | `InWaitSecondsToCloseOPTIONAL` |

#### CloseWebForm

- **Archivo:** `CloseWebForm.cs`
- **Namespace:** `Apptividad.Ozono.RPA.WebActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 91 líneas
- **Propósito:** Cerrar navegador web, de la referencia del contexto que contiene la propiedad WebModel de BaseWebActivity.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `Boolean?` | `InIsRecycleWebModelOPTIONAL` |

#### ConvertHtmlToPdfActivity

- **Archivo:** `ConvertHtmlToPdfActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.WebActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 261 líneas
- **Propósito:** Crear un archivo PDF a partir de un elemento HTML.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InHtmlOPTIONAL` |
  | `OutArgument` | `string` | `OutFilePath` |

#### DownloadFileActivity

- **Archivo:** `DownloadFileActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.WebActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 590 líneas
- **Propósito:** Descargar un archivo, haciendo click a un elemento HTML.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `OutArgument` | `string` | `OutDownloadedFilePathOPTIONAL` |
  | `OutArgument` | `string` | `OutDownloadedFileExtensionOPTIONAL` |

#### EnqueueProvisioningCaptchaActivity

- **Archivo:** `EnqueueProvisioningCaptchaActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 175 líneas
- **Propósito:** Construye las propiedades extendidas de un captcha desde el DOM y registra una solicitud de aprovisionamiento en el servicio Decaptcha para resolución desacoplada.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InHTMLBaseElementIdentifierOPTIONAL` |
  | `OutArgument` | `bool` | `OutIsSuccessful` |
  | `OutArgument` | `string` | `OutMessageResult` |
  | `InOutArgument` | `XElement` | `InOutCaptchaExtendedPropertiesOPTIONAL` |

#### ExtractDataActivity

- **Archivo:** `ExtractDataActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.WebActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 379 líneas
- **Propósito:** Extraer del navegador web, los datos (que se hayan configurado) del resultado del sitio web. Todos los datos extraídos se almacenan en la propiedad WFMessage.RPAInfo.XmlResult.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InPersistTypes` |
  | `InArgument` | `string` | `InElementIdentifierOPTIONAL` |
  | `InArgument` | `string` | `InHTMLBaseElementIdentifierOPTIONAL` |
  | `InArgument` | `Boolean?` | `InUseRegexToExtractTablesOPTIONAL` |

#### GenerateReportActivity

- **Archivo:** `GenerateReportActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.WebActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 514 líneas
- **Propósito:** Genera un reporte (según configuración en UDC), se almacena en un archivo y se sube a una página web, haciendo click en un elemento HTML.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InCustomerName` |

#### GetElementValueActivity

- **Archivo:** `GetElementValueActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.WebActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 131 líneas
- **Propósito:** Obtener el contenido de un elemento HTML.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InIdentifierType` |
  | `InArgument` | `string` | `InElementIdentifier` |
  | `OutArgument` | `string` | `OutElementValue` |
  | `InArgument` | `string` | `InHTMLBaseElementIdentifierOPTIONAL` |

#### GetPopUpUrlActivity

- **Archivo:** `GetPopUpUrlActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.WebActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 201 líneas
- **Propósito:** Obtener la dirección URL de una ventana emergente. El activity hace click en un elemento HTML que invoca una ventana emergente, para obtener la dirección la URL de la ventana emergente.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InActionType` |
  | `InArgument` | `string` | `InValue` |
  | `OutArgument` | `string` | `OutURL` |
  | `InArgument` | `string` | `InElementIdentifier` |
  | `InArgument` | `int?` | `InWaitSecondsToCloseOPTIONAL` |

#### InitializeWebForm

- **Archivo:** `InitializeWebForm.cs`
- **Namespace:** `Apptividad.Ozono.RPA.WebActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 173 líneas
- **Propósito:** Inicializa una nueva instancia de navegador web (según configuración de UDC).
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `Boolean` | `InTryToGetRecycledWebModel` |
  | `InArgument` | `Boolean` | `InIsExternalWebModel` |
  | `InArgument` | `string` | `InTypeWebModelOPTIONAL` |
  | `OutArgument` | `Boolean` | `OutIsRecycleWebModel` |

#### LoadUrlActivity

- **Archivo:** `LoadUrlActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.WebActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 148 líneas
- **Propósito:** Cargar una dirección URL en el navegador web.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InURL` |
  | `InArgument` | `bool?` | `InClearCache` |
  | `InArgument` | `bool` | `InGetUrlFromActivity` |
  | `InArgument` | `bool?` | `InScriptErrorsSuppressedOPTIONAL` |
  | `InArgument` | `bool?` | `InWaitUntilPageLoadedOPTIONAL` |
  | `InArgument` | `string` | `InIsOnlyRefreshOPTIONAL` |

#### LoadUrlAndCertificateSelectionActivity

- **Archivo:** `LoadUrlAndCertificateSelectionActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.WebActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 921 líneas
- **Propósito:** Cargar una dirección URL en el navegador web y autenticarse en el certificado (ventana de Windows Security) de una firma digital.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InURL` |
  | `InArgument` | `bool?` | `InScriptErrorsSuppressedOPTIONAL` |
  | `InArgument` | `string` | `InUserCertificateNameValue` |
  | `InArgument` | `string` | `InUserCertificatePINValueOPTIONAL` |
  | `InArgument` | `string` | `InUserCertificateDeviceValueOPTIONAL` |
  | `InArgument` | `Boolean?` | `InIsEnabledSelectDeviceOPTIONAL` |
  | `InArgument` | `Boolean?` | `InIsMustSetPinOPTIONAL` |
  | `InArgument` | `string` | `InSuccessPageRegexOPTIONAL` |
  | `InArgument` | `string` | `InSuccessPageIdentifierOPTIONAL` |
  | `InArgument` | `int?` | `InTimeOutSecondsOPTIONAL` |
  | `OutArgument` | `Boolean` | `OutSuccessSelection` |
  | `OutArgument` | `Boolean` | `OutIncorrectPin` |

#### MergeAndUpLoadFileActivity

- **Archivo:** `MergeAndUpLoadFileActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.WebActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 446 líneas
- **Propósito:** Genera un reporte (según configuración de UDC), a partir de los archivos adjuntos en TTY de un análisis, se almacena en un archivo y se sube a una página web, haciendo click en un elemento HTML. Utilizado en los RPAs de CIC_AUTORIZACIONES (clientes: DAVICR, SBCR, BACCR) y CICOC_REPORTE_CREDITICIO (clientes: MONIFAICR, UNICOMERCR).
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `OutArgument` | `string` | `OutErrorMessage` |
  | `InArgument` | `string` | `InCustomerName` |

#### ResolveCaptchaActivity

- **Archivo:** `ResolveCaptchaActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.WebActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 819 líneas
- **Propósito:** Resolver captchas de seguridad.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InImgCaptchaIdentifier` |
  | `InArgument` | `string` | `InTbCptchaIdentifier` |
  | `InArgument` | `string` | `InGetHTMLElementTypeOPTIONAL` |
  | `InArgument` | `string` | `InGetHTMLElementTagNameOPTIONAL` |
  | `InArgument` | `string` | `InGetHTMLElementAtributeNameOPTIONAL` |
  | `InArgument` | `string` | `InHTMLBaseElementIdentifierOPTIONAL` |
  | `InArgument` | `Boolean?` | `InGetImgCaptchaByCacheOPTIONAL` |
  | `InArgument` | `Boolean?` | `InUseCQCommandOPTIONAL` |
  | `OutArgument` | `int` | `OutCaptcha_Id` |
  | `OutArgument` | `String` | `OutInCaptcha_TaskId_ServiceKey` |
  | `OutArgument` | `String` | `OutInCaptcha_ServiceSolved` |
  | `InArgument` | `string` | `InCaptchaTypeIdentifierOPTIONAL` |
  | `InArgument` | `int?` | `InWaitSecondsToCloseOPTIONAL` |

#### RestartExternalBrowserActivity

- **Archivo:** `RestartExternalBrowserActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.WebActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 40 líneas
- **Propósito:** Reiniciar el navegador web de la referencia del contexto en la propiedad de WebModel.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `OutArgument` | `Boolean` | `InSuccessAction` |

#### SelectCheckboxActivity

- **Archivo:** `SelectCheckboxActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.WebActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 86 líneas
- **Propósito:** Seleccionar o marcar una caja de verificación de un elemento HTML por identificador.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InElementIdentifier` |
  | `InArgument` | `Boolean?` | `InIsCheckedOPTIONAL` |

#### SelectCheckboxByRegexActivity

- **Archivo:** `SelectCheckboxByRegexActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.WebActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 98 líneas
- **Propósito:** Seleccionar o marcar una caja de verificación de un elemento HTML al primer elemento que coincida con la expresión regular establecida en el argumento de InElementRegexExpression.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InElementRegexExpression` |
  | `InArgument` | `string` | `InTagElementOPTIONAL` |
  | `InArgument` | `Boolean?` | `InIsCheckedOPTIONAL` |
  | `InArgument` | `string` | `InHTMLBaseElementIdentifierOPTIONAL` |

#### SetValueToElementActivity

- **Archivo:** `SetValueToElementActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.WebActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 136 líneas
- **Propósito:** Establecer un valor a un elemento HTML por identificador.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InValue` |
  | `InArgument` | `Boolean` | `InIsEncrypted` |
  | `InArgument` | `string` | `InElementIdentifier` |

#### SetValueToElementByRegexExpressionActivity

- **Archivo:** `SetValueToElementByRegexExpressionActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.WebActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 161 líneas
- **Propósito:** Establecer un valor al primer elemento HTML que coincida con la expresión regular establecida en el argumento de InElementRegexExpression.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InValue` |
  | `InArgument` | `string` | `InElementRegexExpression` |
  | `InArgument` | `string` | `InTagElementOPTIONAL` |
  | `InArgument` | `Boolean?` | `InIsEncryptedOPTIONAL` |
  | `InArgument` | `string` | `InHTMLBaseElementIdentifierOPTIONAL` |

#### SignFileActivity

- **Archivo:** `SignFileActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.WebActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 521 líneas
- **Propósito:** Firmar un documento, usando un certificado de firma digital.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `Boolean?` | `InIsAddTimeStamp` |

#### UpLoadIdActivity

- **Archivo:** `UpLoadIdActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.WebActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 374 líneas
- **Propósito:** A partir de los archivos adjuntos en TTY de una cédula (con imágenes de frente y de atrás de la cédula), se genera un documento y se sube a una página web, haciendo click en un elemento HTML. Utilizado en los RPAs de CIC_AUTORIZACIONES (clientes: DAVICR, SBCR, BACCR) y CICOC_REPORTE_CREDITICIO (clientes: MONIFAICR, UNICOMERCR).
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InCustomerName` |

#### UploadFileActivity

- **Archivo:** `UploadFileActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.WebActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 237 líneas
- **Propósito:** Subir un archivo adjunto a una página web, haciendo click en un elemento HTM.
- **Argumentos declarados:**
  - No se detectaron propiedades de argumento declaradas directamente; utiliza contexto heredado o configuración.

#### ValidateElementActivity

- **Archivo:** `ValidateElementActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.WebActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 184 líneas
- **Propósito:** Evalúa si existe un elemento HTML.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `Boolean?` | `InUseRegexToExtractTables` |
  | `OutArgument` | `bool` | `OutResult` |
  | `OutArgument` | `string` | `OutValueResult` |

#### ValidateRegexMatchWithHTMLActivity

- **Archivo:** `ValidateRegexMatchWithHTMLActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.WebActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 198 líneas
- **Propósito:** Evaluar una expresión regular en el HTML de una página web.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `String` | `InExpressionToValidate` |
  | `InArgument` | `string` | `InHTMLBaseElementIdentifierOPTIONAL` |
  | `InArgument` | `bool?` | `InWaitToLoadPageOPTIONAL` |
  | `InArgument` | `bool?` | `InRemoveHTMLTagsToResultOPTIONAL` |
  | `InArgument` | `bool?` | `InMultiMatchOPTIONAL` |
  | `InArgument` | `bool?` | `InGetValueFromGroup` |
  | `OutArgument` | `String` | `OutExpressionMatchedResult` |
  | `OutArgument` | `Boolean` | `OutIsExpressionMatched` |

#### WaitUntilCaptchaResolvedActivity

- **Archivo:** `WaitUntilCaptchaResolvedActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.WebActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 340 líneas
- **Propósito:** Esperar hasta que el usuario resuelva manualmente el captcha.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InCaptchaIdentifier` |
  | `InArgument` | `int?` | `InWaitSecondsToCloseOPTIONAL` |
  | `InArgument` | `string` | `InMessageToWaitReadyOPTIONAL` |
  | `InArgument` | `string` | `InMessageToTimeOutOPTIONAL` |
  | `InArgument` | `string` | `InRegexToCloseOPTIONAL` |
  | `InArgument` | `string` | `InHTMLBaseElementIdentifierOPTIONAL` |
  | `InArgument` | `int?` | `InXPositionOPTIONAL` |
  | `InArgument` | `int?` | `InYPositionOPTIONAL` |

#### WaitUntilConditionActivity

- **Archivo:** `WaitUntilConditionActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.WebActivities`
- **Clase base:** `BaseWebActivity`
- **Tamaño aproximado:** 149 líneas
- **Propósito:** Esperar hasta que se cumpla una condición. Con `InIsCompleteWhenNoMatchOPTIONAL` en `true`, el resultado se considera exitoso cuando ninguna de las expresiones configuradas aparece en el HTML.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InHTMLBaseElementIdentifierOPTIONAL` |
  | `InArgument` | `int?` | `InWaitSecondsToCloseOPTIONAL` |
  | `InArgument` | `bool?` | `InThrowTimeOutExceptionOPTIONAL` |
  | `InArgument` | `bool?` | `InIsCompleteWhenNoMatchOPTIONAL` |
  | `OutArgument` | `bool` | `OutConditionFound` |

### D.2 UtilsActivities

#### AppendAUXILIARBillExcelActivity

- **Archivo:** `AppendAUXILIARBillExcelActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 314 líneas
- **Propósito:** Agrega datos de facturación auxiliar a un libro de Excel conforme a la estructura esperada por los procesos fiscales integrados.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InBillPath` |
  | `InArgument` | `string` | `InExcelFilePath` |
  | `InArgument` | `string` | `InExcelSheetName` |
  | `InArgument` | `string` | `InReceptorCompany` |
  | `InArgument` | `int` | `InAppendRow` |
  | `InArgument` | `string` | `InTypeFile` |
  | `InArgument` | `string` | `InDelimiterOptional` |
  | `OutArgument` | `bool` | `OutIsSuccessful` |
  | `OutArgument` | `string` | `OutTechnicalMessage` |
  | `OutArgument` | `string` | `OutUserMessage` |

#### AppendSATBillExcelActivity

- **Archivo:** `AppendSATBillExcelActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 269 líneas
- **Propósito:** Agrega datos de una factura SAT a un libro de Excel y devuelve el resultado del procesamiento.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InBillPath` |
  | `InArgument` | `string` | `InExcelFilePath` |
  | `InArgument` | `string` | `InExcelSheetName` |
  | `InArgument` | `int` | `InAppendRow` |
  | `InArgument` | `string` | `InRFCReceptorFilter` |
  | `OutArgument` | `bool` | `OutIsSuccessful` |
  | `OutArgument` | `string` | `OutTechnicalMessage` |
  | `OutArgument` | `string` | `OutUserMessage` |

#### CallPostWebServiceMethodActivity

- **Archivo:** `CallPostWebServiceMethodActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 90 líneas
- **Propósito:** Devolver el resultado al consumir un servicio web.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InUrl` |
  | `InArgument` | `Object` | `InObjectParameter` |
  | `OutArgument` | `bool` | `OutIsSuccessful` |
  | `OutArgument` | `string` | `OutTechnicalMessage` |
  | `OutArgument` | `string` | `OutUserMessage` |
  | `OutArgument` | `string` | `OutStringJsonResult` |

#### ConvertFileFromBase64Activity

- **Archivo:** `ConvertFileFromBase64Activity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 101 líneas
- **Propósito:** Crear un archivo a partir de una cadena de caracteres en formato de Base64.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InUrlFileOPTIONAL` |
  | `InOutArgument` | `string` | `InOutBase64File` |
  | `InArgument` | `string` | `InPathToSave` |
  | `OutArgument` | `bool` | `OutResult` |

#### ConvertStringHTMLTablesToDataTablesActivity

- **Archivo:** `ConvertStringHTMLTablesToDataTablesActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 107 líneas
- **Propósito:** Devuelve un objeto de tipo DataTable a partir del HTML de una tabla.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InHTML` |
  | `InArgument` | `string` | `InXPathRootToSearchOPTIONAL` |

#### CreateFolderByDateActivity

- **Archivo:** `CreateFolderByDateActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 52 líneas
- **Propósito:** Cree una estructura de carpetas para un directorio a partir de una fecha.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `DateTime` | `InDate` |
  | `InArgument` | `string` | `InInitPath` |
  | `OutArgument` | `string` | `OutResultPath` |

#### DelayActivity

- **Archivo:** `DelayActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivities.BaseActivity`
- **Tamaño aproximado:** 23 líneas
- **Propósito:** Introduce una espera controlada integrada con el contexto del workflow, logging y validación de cancelación.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `double?` | `InWaitMillisecondsOPTIONAL` |

#### DownloadFileByWebRequestActivity

- **Archivo:** `DownloadFileByWebRequestActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 98 líneas
- **Propósito:** Descargar un archivo a partir de una dirección URL..
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InFileURL` |
  | `InArgument` | `string` | `InPathToSave` |
  | `InArgument` | `bool` | `InGetByteArrayResult` |
  | `OutArgument` | `bool` | `OutResult` |
  | `OutArgument` | `string` | `OutBase64File` |
  | `OutArgument` | `byte[]` | `OutByteArrayFile` |

#### DownloadWebPageActivity

- **Archivo:** `DownloadWebPageActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivities.BaseActivity`
- **Tamaño aproximado:** 32 líneas
- **Propósito:** Obtener el HTML de una página web a partir de una dirección URL.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InURL` |
  | `OutArgument` | `string` | `OutStringHTML` |

#### FileCopyToActivity

- **Archivo:** `FileCopyToActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 174 líneas
- **Propósito:** Copia archivos desde una ruta de origen hacia un destino, con validaciones, reemplazo opcional y trazabilidad.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InSourceDirectoryPath` |
  | `InArgument` | `string` | `InSourceFileNameOPTIONAL` |
  | `InArgument` | `string` | `InDestinationDirectoryPath` |
  | `InArgument` | `string` | `InDestinationFileNameOPTIONAL` |
  | `InArgument` | `bool?` | `InIsOverwriteOPTIONAL` |
  | `InArgument` | `bool?` | `InIsDeleteSourceFileOPTIONAL` |
  | `OutArgument` | `string` | `OutDestinationFilePath` |

#### FindContentInReceivedMailActivity

- **Archivo:** `FindContentInReceivedMailActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 134 líneas
- **Propósito:** Buscar correo electrónico por subject y devolver lista de valores que coincidan con lista de expresiones regulares..
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InTargetSubject` |
  | `InArgument` | `string` | `InEmailAccount` |
  | `InArgument` | `int` | `InPort` |
  | `InArgument` | `string` | `InPassword` |
  | `InArgument` | `bool` | `InSSL` |
  | `InArgument` | `string` | `InEmailServer` |
  | `InArgument` | `string` | `InReferenceTextInBodyOPTIONAL` |
  | `InArgument` | `bool` | `InMarkAsReadAfterExtraction` |

#### GetAndSaveExcelFileActivity

- **Archivo:** `GetAndSaveExcelFileActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 79 líneas
- **Propósito:** Descargar plantilla de archivo de Excel desde TTY.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InFileId` |
  | `InArgument` | `string` | `InApplicationId` |
  | `InArgument` | `bool` | `InIsPublic` |
  | `InArgument` | `string` | `InPathAndFileNameToSave` |
  | `OutArgument` | `bool` | `OutIsSuccessful` |
  | `OutArgument` | `string` | `OutTechnicalMessage` |
  | `OutArgument` | `string` | `OutUserMessage` |

#### GetContentFileActivity

- **Archivo:** `GetContentFileActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 58 líneas
- **Propósito:** Obtener el contenido de un archivo con formato de texto plano (txt, html, json, xml, etc). Se debe de usar solo un argumento a la vez: InFilePathOPTIONAL o InFileDataOPTIONAL o InFileBase64OPTIONAL.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InFilePathOPTIONAL` |
  | `InArgument` | `byte[]` | `InFileDataOPTIONAL` |
  | `InArgument` | `string` | `InFileBase64OPTIONAL` |
  | `OutArgument` | `string` | `OutFileContent` |

#### GetEnqueueProvisioningActivity

- **Archivo:** `GetEnqueueProvisioningActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 113 líneas
- **Propósito:** Obtener aprovisionamiento en cola de captchas. Consume el servicio de GetEnqueueProvisioningList para obtener los registros en estado Provisioning.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `int?` | `InMaxRowsRequest` |
  | `InArgument` | `int?` | `InMaxTimeRequest` |
  | `InArgument` | `string` | `InIdSolved` |
  | `OutArgument` | `bool` | `OutHasException` |
  | `OutArgument` | `Exception` | `OutException` |

#### GetFileFromDirectoryActivity

- **Archivo:** `GetFileFromDirectoryActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 205 líneas
- **Propósito:** Buscar un archivo en el directorio de una carpeta.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InDirectoryPath` |
  | `InArgument` | `string` | `InFileSearchPattern` |
  | `InArgument` | `string` | `InFileRegexFormat` |
  | `InArgument` | `int?` | `InWaitSecondsToSearchOPTIONAL` |
  | `InArgument` | `string` | `InIgnoredFilePathOPTIONAL` |
  | `InArgument` | `bool?` | `InIsGetFileContentOPTIONAL` |
  | `OutArgument` | `byte[]` | `OutFileData` |
  | `OutArgument` | `string` | `OutFileBase64` |
  | `OutArgument` | `string` | `OutFileContent` |
  | `OutArgument` | `string` | `OutFilePath` |

#### GetFileSizeByWebRequestActivity

- **Archivo:** `GetFileSizeByWebRequestActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 44 líneas
- **Propósito:** Devuelve el tamaño de un archivo.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InFileURL` |
  | `OutArgument` | `long` | `OutFileSize` |
  | `OutArgument` | `string` | `OutContentDispositionHeader` |

#### GetNextRPARequestActivity

- **Archivo:** `GetNextRPARequestActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 478 líneas
- **Propósito:** Buscar la nueva solicitud de RPA pendiente de ser atendida. Toda la información de la solicitud de RPA se almacena en la propiedad WFMessage.RPAInfo.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InExtendedProperty` |
  | `OutArgument` | `Boolean` | `OutGotNewRequest` |

#### GetPDFContentActivity

- **Archivo:** `GetPDFContentActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 390 líneas
- **Propósito:** Obtener el contenido de un archivo PDF.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InPdfFilePath` |
  | `OutArgument` | `string` | `OutPdfContent` |

#### GetUDCDetailListActivity

- **Archivo:** `GetUDCDetailListActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 114 líneas
- **Propósito:** Devuelve la lista de UDCID de un UDCCODE.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `OutArgument` | `SettingsUdcDetailList` | `OutUDCDetailList` |

#### GetUDCValueFromDetailListActivity

- **Archivo:** `GetUDCValueFromDetailListActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 81 líneas
- **Propósito:** Obtiene un valor específico desde una lista de detalles UDC previamente cargada, evitando una consulta adicional al backend.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InDefaultValueOPTIONAL` |
  | `InArgument` | `SettingsUdcDetailList` | `InUDCDetailList` |
  | `OutArgument` | `string` | `OutResult` |

#### GetValueFromUDCActivity

- **Archivo:** `GetValueFromUDCActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 128 líneas
- **Propósito:** Devuelve el valor de un UDCID.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `OutArgument` | `string` | `OutResult` |
  | `InArgument` | `string` | `InDefaultValueOPTIONAL` |

#### InsertRPAInfoActivity

- **Archivo:** `InsertRPAInfoActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 167 líneas
- **Propósito:** Agregar un nuevo registro a la tabla RPA_REQUEST en la base de datos de Ozono.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `bool?` | `InProcessingOPTIONAL` |
  | `InArgument` | `int?` | `InPriorityOPTIONAL` |
  | `InArgument` | `long?` | `InRequestIdOPTIONAL` |
  | `InArgument` | `string` | `InExtendedPropertyOPTIONAL` |
  | `InArgument` | `string` | `InStatusRowOPTIONAL` |
  | `InArgument` | `string` | `InXmlRequestOPTIONAL` |
  | `InArgument` | `string` | `InXmlResponseOPTIONAL` |
  | `OutArgument` | `RPAMessage` | `OutWFMessageResponse` |

#### JObjectListToDataTableActivity

- **Archivo:** `JObjectListToDataTableActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 59 líneas
- **Propósito:** Convierte una lista de elementos de tipo JObject a un DataTable.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `OutArgument` | `DataTable` | `OutDataTableResult` |

#### PersistActivity

- **Archivo:** `PersistActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 27 líneas
- **Propósito:** El resultado de un RPA se almacena en un nuevo registro en la tabla RPA_RESULT, en la base de datos de Ozono y se actualizan los registros del RPA de las tablas RPA_REQUEST y RPA_TO_PROCESS.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `bool?` | `InIsSuccessfulOPTIONAL` |

#### ProcessProvisioningCaptchaActivity

- **Archivo:** `ProcessProvisioningCaptchaActivity .cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 158 líneas
- **Propósito:** Procesa una solicitud de captcha aprovisionada y recupera su solución y estado desde el servicio Decaptcha.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InCompanyAssigned` |
  | `InArgument` | `string` | `InServiceKeyAssigned` |
  | `InArgument` | `string` | `InOperationidAssigned` |
  | `InArgument` | `string` | `InDroidIdAssigned` |
  | `InArgument` | `string` | `InCaptchaImageBase64` |
  | `InArgument` | `System.Xml.Linq.XElement` | `InExtendedProperty` |
  | `InOutArgument` | `Apptividad.Ozono.DataContracts.Decaptcha.DecaptchaServiceResponse` | `OutDecapchaServiceResponse` |
  | `InOutArgument` | `Apptividad.Ozono.DataContracts.Decaptcha.DecaptchaServiceResult` | `OutDecaptchaServiceResult` |
  | `OutArgument` | `bool` | `OutHasException` |
  | `OutArgument` | `System.Exception` | `OutException` |
  | `OutArgument` | `string` | `OutProvisioningCaptchaMessageResult` |

#### ReceiveMailActivity

- **Archivo:** `ReceiveMailActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 179 líneas
- **Propósito:** Obtener lista de mensajes de correo de una cuenta de correo.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InUserName` |
  | `InArgument` | `string` | `InUserPassword` |
  | `InArgument` | `string` | `InImapClientHost` |
  | `InArgument` | `int` | `InPort` |
  | `InArgument` | `bool?` | `InEnableSslOPTIONAL` |
  | `InArgument` | `string` | `InCriteriaBySearchMail` |

#### RegexMatchFromStringActivity

- **Archivo:** `RegexMatchFromStringActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 92 líneas
- **Propósito:** Evaluar una expresión regular a una cadena de caracteres.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InStringToEvaluate` |
  | `InArgument` | `string` | `InExpressionToValidate` |
  | `InArgument` | `bool` | `InMultiMatchResultOPTIONAL` |
  | `InArgument` | `bool` | `InUseGroupValueOPTIONAL` |
  | `OutArgument` | `string` | `OutMatchedResult` |
  | `OutArgument` | `bool` | `OutIsExpressionMatched` |

#### SendCaptchaServiceFeedback

- **Archivo:** `SendCaptchaServiceFeedback.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 77 líneas
- **Propósito:** Consumir el servicio de DecaptchaServiceFeedBack.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `int` | `InCaptcha_Id` |
  | `InArgument` | `String` | `InCaptcha_TaskId_ServiceKey` |
  | `InArgument` | `String` | `InCaptcha_ServiceSolved` |
  | `InArgument` | `Boolean` | `InCaptcha_WorksCorrectly` |

#### SendMailActivity

- **Archivo:** `SendMailActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 167 líneas
- **Propósito:** Enviar un mensaje de correo.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InUserEmail` |
  | `InArgument` | `string` | `InUserName` |
  | `InArgument` | `string` | `InUserPassword` |
  | `InArgument` | `string` | `InTo` |
  | `InArgument` | `string` | `InSubject` |
  | `InArgument` | `string` | `InBody` |
  | `InArgument` | `string` | `InSmtpClient` |
  | `InArgument` | `int` | `InPort` |
  | `InArgument` | `Boolean?` | `InBodyHTMLOPTIONAL` |
  | `InArgument` | `Boolean?` | `InEnableSslOPTIONAL` |
  | `InArgument` | `string` | `InCcOPTIONAL` |
  | `InArgument` | `string` | `InBccOPTIONAL` |

#### SetProvisioningSolvedActivity

- **Archivo:** `SetProvisioningSolvedActivity .cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 134 líneas
- **Propósito:** Marca como resuelta una solicitud de captcha aprovisionada e informa el resultado al servicio Decaptcha.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `int?` | `InId` |
  | `InArgument` | `string` | `InIdSolved` |
  | `InArgument` | `string` | `InServiceSolved` |
  | `InArgument` | `bool?` | `InIsSuccess` |
  | `InArgument` | `bool?` | `InIsCorrect` |
  | `InArgument` | `string` | `InCaptchaText` |
  | `InArgument` | `string` | `InUserMessage` |
  | `InArgument` | `string` | `InTecnicalMessage` |
  | `InArgument` | `DateTime` | `InBeginServiceSolved` |
  | `InArgument` | `DateTime` | `InEndServiceSolved` |
  | `InArgument` | `double?` | `InSolvedIn` |
  | `InArgument` | `System.Xml.Linq.XElement` | `InXMLDetail` |
  | `OutArgument` | `ProvisioningDecaptchaServiceResponse` | `OutProvisioningDecaptchaResponse` |
  | `OutArgument` | `bool` | `OutHasException` |
  | `OutArgument` | `Exception` | `OutException` |

#### SetValueToUDCActivity

- **Archivo:** `SetValueToUDCActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 49 líneas
- **Propósito:** Actualizar el valor de un UDCID.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `String` | `InValue` |

#### SplitPDFActivity

- **Archivo:** `SplitPDFActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 260 líneas
- **Propósito:** Separa un PDF en documentos lógicos mediante coincidencias de texto por página y copia de rangos con iTextSharp.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InPdfFilePath` |
  | `InArgument` | `string` | `InDestinationDirectoryPath` |

#### ThrowExceptionActivity

- **Archivo:** `ThrowExceptionActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 134 líneas
- **Propósito:** Registra en WFMessage la excepción recibida y realiza acciones diferentes, dependiendo de excepciones conocidas.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `Exception` | `InException` |

#### UpdateWebCertificatePINActivity

- **Archivo:** `UpdateWebCertificatePINActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivities.BaseActivity`
- **Tamaño aproximado:** 70 líneas
- **Propósito:** Ventana emergente para ingresar y actualizar el nuevo PIN del certificado web de una firma digital.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `string` | `InMessageToUpdatePinOPTIONAL` |

#### UploadFtpActivity

- **Archivo:** `UploadFtpActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 289 líneas
- **Propósito:** Subir archivos a un servidor FTP, según configuración de UDC.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `OutArgument` | `bool` | `OutUploadSuccessful` |
  | `OutArgument` | `string` | `OutMessageFtp` |

#### ValidateRequiredAttachmentsActivity

- **Archivo:** `ValidateRequiredAttachmentsActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 160 líneas
- **Propósito:** Valida si un análisis de TTY contiene los archivos adjuntos requeridos de la cédula del cliente. Utilizado en los RPAs de CIC_AUTORIZACIONES (clientes: DAVICR, SBCR, BACCR) y CICOC_REPORTE_CREDITICIO (clientes: MONIFAICR, UNICOMERCR).
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `OutArgument` | `string` | `OutResult` |

#### WaitUntilUserReadyActivity

- **Archivo:** `WaitUntilUserReadyActivity.cs`
- **Namespace:** `Apptividad.Ozono.RPA.UtilsActivities`
- **Clase base:** `BaseActivity`
- **Tamaño aproximado:** 105 líneas
- **Propósito:** Muestra ventana emergente para poner en pausa el flujo de un RPA mientras se espera hasta que el usuario esté listo para continuar.
- **Argumentos declarados:**

  | Dirección | Tipo | Nombre |
  |---|---|---|
  | `InArgument` | `Action` | `InActionToDoWhileWaitingOPTIONAL` |
  | `InArgument` | `int?` | `InWaitSecondsToCloseOPTIONAL` |
  | `InArgument` | `bool?` | `InThrowTimeOutExceptionOPTIONAL` |
  | `InArgument` | `string` | `InMessageToWaitReadyOPTIONAL` |
  | `InArgument` | `int?` | `InXPositionOPTIONAL` |
  | `InArgument` | `int?` | `InYPositionOPTIONAL` |
