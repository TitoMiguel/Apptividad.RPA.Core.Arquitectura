---
title: "Trazabilidad de la evidencia"
description: "Referencia: cómo se relaciona cada afirmación de la documentación con su nivel de evidencia dentro del propio sistema."
category: "Referencia"
c4Level: "Code"
position: 8
tags: [referencia, trazabilidad, evidencia]
---

# Trazabilidad de la evidencia

Esta documentación es autocontenida: cada afirmación se sostiene en artefactos del propio sistema —código, procedimientos almacenados, esquema de base de datos (DDL) y registros de operación—, no en materiales externos de elaboración.

## Niveles de evidencia

Para leer la documentación con el nivel de certeza adecuado, las afirmaciones se clasifican en tres niveles.

| Nivel | Significado | Cómo verificarlo |
|---|---|---|
| **Confirmado por código** | Existe una implementación observable en el código base. | Clases, métodos, argumentos, contratos WCF, llamadas a procedimientos almacenados y dependencias entre proyectos. |
| **Confirmado por estructura de datos** | La estructura o el comportamiento se define en el esquema (DDL) o en el procedimiento almacenado. | Columnas y claves de las tablas; cuerpo de los procedimientos; registros reales de operación. |
| **Inferencia técnica controlada** | Se deduce de nombres, llamadas y flujo, sin una definición explícita única. | Se identifica como inferencia y se acompaña de la señal que la respalda. |

## Cómo se rastrea una afirmación

- **Componentes y responsabilidades:** se rastrean hasta el proyecto y la clase que los implementan.
- **Flujos e integraciones:** se rastrean hasta el método, el contrato WCF o el workflow que los realiza.
- **Persistencia y estados:** se rastrean hasta la tabla, el procedimiento almacenado o el trigger que los define, y hasta los valores presentes en operación.
- **Configuración dinámica:** se rastrea hasta el UDC correspondiente.

## Distinción de niveles de madurez

La documentación mantiene explícita la diferencia entre lo **documentado**, lo **diseñado**, lo **implementado** y lo **observado en operación**. Cuando una relación no puede demostrarse con estas fuentes, se identifica de forma explícita como no determinada, en lugar de presentarla como un hecho.
