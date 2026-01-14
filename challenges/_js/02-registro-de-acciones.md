---
title: Historial de acciones
description: Crea un sistema simple que registre acciones del usuario y permita revertirlas sin recargar la página.
svg: draws/historial-de-acciones.svg
---

```md
## Descripción

Estás desarrollando una **herramienta interna de pruebas**. Durante el uso, necesitas registrar cada acción que el usuario realiza (clics en botones) y permitir **revertir la última acción**, como un historial simple.

El reto consiste en implementar un **sistema de historial de acciones en memoria**, usando únicamente JavaScript.

## Requerimientos

1. Cada vez que el usuario presione el botón **“Acción”**, se debe:

  - Registrar la acción en una estructura de datos en JavaScript.
  - Mostrar en pantalla el número total de acciones registradas.

2. Debe existir un botón **“Deshacer”** que:

  - Elimine la última acción registrada.
  - Actualice la información mostrada.

3. Si no hay acciones para deshacer:

  - El sistema debe manejar el caso sin errores.
```
{:file="enunciado"}

## Placeholder inicial

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Reto JS – Historial</title>
</head>
<body>

  <button id="action-btn">Acción</button>
  <button id="undo-btn">Deshacer</button>

  <p id="status">Acciones realizadas: 0</p>

  <script>
    // Escribe aquí tu solución
  </script>
</body>
</html>
```
{:file="index.html"}