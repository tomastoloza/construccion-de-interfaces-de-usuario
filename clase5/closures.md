¿En qué parte del código se genera un closure? ¿Por qué?
```js
function cambiarDimensionFuente(size) {
    return function() {
        document.body.style.fontSize = size + 'px';
    };
}
```
---
¿En qué parte del código se establece que al hacer click sobre el elemento con id fuente-8 se cambie el tamaño de las fuentes de la página?

En primer lugar se obtiene el elemento a modificar
```js
document.getElementById('fuente-8').onclick = size8;
```
Y en segundo lugar, la función modifica el estilo.
```js
document.body.style.fontSize = size + 'px';
```
---
Supone que eliminamos la función setClicks y dejamos su código “libre” dentro de las etiquetas `<script> … </script>`.
¿Qué mensaje de error te muestra la consola de depuración?
```
"<a class='gotoLine' href='#47:32'>47:32</2a> Uncaught ReferenceError: setClicks is not defined"
```
¿Por qué aparece ese mensaje de error?

Porque JS no encuentra la función

---
¿Debemos escribir `document.getElementById('fuente-8').onclick = size8;` ó `document.getElementById('fuente-8').onclick = size8();` ?
¿Por qué?

Debemos escribir `document.getElementById('fuente-8').onclick = size8;` para cuando se haga el onclick se llame a la función size8.

Supón que al cargar la página queremos que el tamaño inicial de fuente sea 8 y para ello nos valemos de la función setClicks. ¿Debemos escribir dentro de esta función size8; ó size8();? ¿Por qué?

size8(); ya que debemos llamar a la funcion para que sea ejecutada

Las closures no siempre son necesarias, incluso a veces se generan involuntariamente o innecesariamente consumiendo recursos del sistema que podrían ahorrarse. ¿Qué ventajas le ves al uso de closures en este código? ¿Y qué inconvenientes?

[Ejercicio 7](/clase5/closures.js)