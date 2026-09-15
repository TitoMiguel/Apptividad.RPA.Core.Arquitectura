---
title: "Seguridad"
description: "Explicación: controles observados, riesgos y recomendaciones de seguridad."
category: "Explicación"
c4Level: "Operación"
position: 4
tags: [seguridad, controles, riesgos]
---

# Seguridad

## Seguridad

### Controles observados

- Autenticación de usuario Shell mediante servicios Apptividad.
- SSO/token en contexto de sesión.
- Autorización por roles para `ServiceReference`.
- UDC `OZONO_RPA_SECURITY_CONFIG`.
- Perfil por usuario con ExtendedProperties y certificado.
- Cifrado/validación del PIN.
- Ocultamiento de `USERNAME` y `PASSWORD` en logs de parámetros.
- Restricción de extensiones de paquetes.
- Validación de tamaño/extensión de attachments.
- Segregación de DLL por cliente.

### Riesgos y recomendaciones

- Mover credenciales/PIN a un almacén de secretos o cifrado ligado a máquina/usuario.
- Enmascarar PII y secretos en logs, correo y heartbeat.
- Desactivar detalle de excepción WCF fuera de entornos controlados.
- Firmar paquetes y verificar hash antes de instalar.
- Aplicar mínimo privilegio a usuario Windows, carpetas, certificados y servicios.
- Auditar acciones remotas con actor, motivo y resultado.
- Mantener SBOM e inventario de vulnerabilidades.
