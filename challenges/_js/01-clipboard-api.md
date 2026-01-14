---
title: "Copiar al portapapeles"
description: "Implementa una funcionalidad en JavaScript que permita **copiar texto al portapapeles** usando la **Clipboard API**."
# video: /media/imagenes-mal-optimizadas.mp4
poster: "01"
svg: draws/clipboard.svg
---

```md
## Descripción

Implementa una funcionalidad en JavaScript que permita **copiar texto al portapapeles** usando la **Clipboard API**

La solución debe cumplir con lo siguiente:

- Mostrar un texto fijo en pantalla.
- Incluir un botón **“Copiar”**.
- Al hacer clic en el botón:
  - Copiar el texto usando `navigator.clipboard.writeText`.
  - Mostrar una confirmación visual de que el texto fue copiado.
- Manejar errores en caso de que la API no esté disponible.
- No usar librerías externas ni `execCommand`.

## Documentación referencial

- https://developer.mozilla.org/es/docs/Web/API/Clipboard_API
```
{:file='enunciado'}

A continuación, se entrega una estructura base para comenzar el reto:

```html
<div class="copiar-box">
  <p id="texto">Texto de ejemplo para copiar</p>

  <button id="btn-copiar">Copiar</button>

  <div id="estado" class="mensaje"></div>
</div>

<script>
  // Implementa aquí la lógica usando la Clipboard API
</script>
```
{:file='index.html'}
