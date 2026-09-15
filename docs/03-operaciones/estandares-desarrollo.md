---
title: "Estándares de desarrollo, pruebas y liberación"
description: "Guía: convenciones de desarrollo, pruebas y liberación del Core RPA."
category: "Guía"
c4Level: "Operación"
position: 7
tags: [desarrollo, pruebas, liberacion]
---

# Estándares de desarrollo, pruebas y liberación

## Estándares de desarrollo, pruebas y liberación

### Desarrollo

- Workflows desarrollados en Visual Studio dentro de la solución TimeToYes/Credit Quick.
- Reutilizar una base existente y no duplicar funcionalidad.
- Lógica de negocio de Activity en `RunContext`.
- Argumentos In/Out/InOut y sufijo OPTIONAL.
- Robots modernos con máquina de estados.
- `Main.xaml` centraliza transiciones y recuperación.
- Selectores y constantes variables en UDC.
- Respuesta XML y clonación documentadas.

### Pruebas

El estándar define una clase `NombreActivityTest`, `[TestClass]`, herencia de `BaseTestingActivity`, métodos `[TestMethod]` y uso del constructor `internal`. El proyecto de pruebas no fue incluido, por lo que no se verificó cobertura ni ejecución.

### Liberación

- Code review.
- Compilación/publicación Jenkins.
- ZIP por versión.
- Eliminar ensamblados de otros clientes.
- Conservar config del cliente.
- Backup y rollback.
- Validar versión del Shell.
- Smoke test de login, conexión, driver, workflow y resultado.
