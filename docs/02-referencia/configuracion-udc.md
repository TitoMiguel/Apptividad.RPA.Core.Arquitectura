---
title: "Configuración UDC y Extended Properties"
description: "Referencia: familias de UDC por servicio, parámetros esenciales y globales, y los filtros ExtendedProperties/RpaRequestFilters."
category: "Referencia"
c4Level: "Code"
position: 3
tags: [referencia, udc, extended-properties]
---

# Configuración UDC y Extended Properties

## Configuración UDC

### Familias por servicio

| Familia | Visibilidad | Contenido |
|---|---|---|
| `[SERVICIO]_RPA_DEF` | Privada | Ejecución, workflow, navegador, URL, captcha, sesiones, reintentos y referencias. |
| `[SERVICIO]_RPA_RESPONSE` | Privada | Mapeo de datos: TargetId, SourceId y SourceType. |
| `[SERVICIO]_RPA_RESULTVALIDATION` | Pública/privada | XPath para reutilizar o clonar resultados. |
| `[SERVICIO]_RPA_TTY_CONFIG` | Pública/privada | Activación, request/response y tiempos. |
| `OZONO_RPA_SECURITY_CONFIG` | Pública/privada | Referencia de servicio, roles y seguridad. |
| `OZONO_RPA_CONFIG` | Global | Shell, Activities, monitor, logs, versiones, timeout y correo. |
| `COMMAND_CONFIGURATION` | Modelo/sentencia | Registro de `HTMLCommand` y correlativo. |
| `EXPIRATION` | Global/servicio | Vigencia para reutilizar resultados. |

### Parámetros esenciales de `[SERVICIO]_RPA_DEF`

| UDCID | Función | Riesgo |
|---|---|---|
| `ASSEMBLY_CLASS_NAME` | Clase y ensamblado raíz. | No se puede crear el robot. |
| `ID_SERVICE` | Identificador funcional y de cola. | Enrutamiento incorrecto. |
| `URL` | Sitio objetivo. | Ambiente o endpoint incorrecto. |
| `CONTEXT_MODEL_TYPE` | Tipo de contexto/navegador. | Incompatibilidad con Activities. |
| `USE_EXTERNAL_BROWSER` | Navegador externo. | Comportamiento diferente. |
| `KEEP_ALIVE` | Sesión persistente. | Pérdida de sesión o consumo excesivo. |
| `MAX_SESSIONS` | Sesiones simultáneas. | Saturación o subutilización. |
| `MAX_RETRY_NUMBER` | Reintentos. | Bucles o poca resiliencia. |
| `RESTART_DELAY` | Espera entre ciclos. | Polling agresivo o latencia. |
| `TIMEOUT_TO_CLOSE_SESSION` | Expiración de sesión. | Sesiones caducadas o reinicios frecuentes. |
| `FOCUS_WEB_BROWSER` | Mantener navegador al frente. | Interferencia o fallo de UI Automation. |
| `CAPTCHA_ENABLED` | Presencia de captcha. | Bloqueo o consumo innecesario. |
| `CAPTCHA_AUTOMATIC` | Modo automático/manual. | Espera indefinida o uso no autorizado. |
| `CAPTCHA_RETRY` | Reintentos de captcha. | Bloqueos o costo excesivo. |
| `AUTOMATIC_WEB_CERTIFICATE` | Selección automática de certificado. | Selección errónea o intervención. |
| `UDC_CONFIG_XML_RESPONSE` | Mapeo de respuesta. | Resultado vacío/incompleto. |
| `UDC_CONFIG_RESULT_VALIDATION` | Validación de clonación. | Reutilización incorrecta. |

### Parámetros globales relevantes

| UDCID | Función |
|---|---|
| `WAIT_ACTIVITY_TIMEOUT_SECONDS` | Timeout base de Activities. |
| `RETRIES_BY_ACTIVITY` | Reintentos por Activity. |
| `CHECK_WEBSITE_STATUS` | Validación de sitio. |
| `SEND_EMAIL_ERROR_NOTIFICATION` | Alertas y destinatarios. |
| `SAVE_LOG_RESULT` | Persistencia/retención de log. |
| `RPA_SERVICE_DEBUG_ENABLE` | Trazas del servicio. |
| `RPA_MONITOR_ROOM_ENABLE` | Heartbeat y control remoto. |
| `RPA_MONITOR_ROOM_HEARTBEAT_TIMEOUT` | Frecuencia/timeout de heartbeat. |
| `RPA_MONITOR_ROOM_LOG` | Adjuntar log/XML al heartbeat. |
| `RPA_MONITOR_ROOM_REQUEST_QUEUE` | Limpieza de requests antiguos. |
| `RPA_MONITOR_ROOM_ACTION_EXPIRATION` | Expiración de acciones. |
| `RPA_SHELL_RUNTIME_PATH` | Ruta raíz del runtime. |
| `RPA_SHELL_VERSION_ENABLE` | Gestor de versiones. |
| `RPA_SHELL_VERSION_ALLOWED_EXTENSIONS` | Extensiones permitidas. |
| `SCHEDULE_RESTART_BAT` | Reinicio programado. |
| `STOP_ACTIVITY_WHEN_TIMEOUT` | Control ante timeout. |
| `WAIT_SECONDS_TO_START_RPA_INSTANCE` | Espaciado al iniciar instancias. |
| `VALIDATE_SECONDS_TO_SHELL_RUN` | Ventana para determinar Shell activo. |

### ExtendedProperties

Permiten que una instancia tome únicamente las solicitudes compatibles. Los filtros se declaran bajo `ExtendedProperties/RpaRequestFilters` como filas `ROW`. Cada fila define un `Path` (una expresión XPath completa sobre `XMLREQUEST`), un `Operator` y un `Value`. El procedimiento de selección traduce `EQUALS` a `IN` y `NOT_EQUALS` a `NOT IN`. Cuando el `Value` contiene una lista separada por comas, se evalúa como conjunto.

Sin filtros adicionales, el criterio predeterminado es el servicio (`RPAIdService`). Una configuración adicional puede restringir por usuario, cédula, modelo u otros valores presentes en `ProcessIdentifiers` o `RPAQueryParameters`.

```xml
<ExtendedProperties>
  <RpaRequestFilters>
    <ROW Path="(/CQCommandParameterList/RPAParameters/RPAConfiguration/RPAIdService/node())[1]"
         Operator="EQUALS" Value="SERVICIO_RPA" />
    <ROW Path="(/CQCommandParameterList/RPAParameters/RPAQueryParameters/row/@USERID)[1]"
         Operator="EQUALS" Value="usuario.analista" />
  </RpaRequestFilters>
</ExtendedProperties>
```

Estos filtros viajan en la columna `EXTENDEDPROPERTIES` de la tabla `RPA` (por instancia) y también se reciben como parámetro del procedimiento de selección. La combinación de los filtros propios y los de las demás instancias en ejecución determina qué solicitud toma cada instancia.
