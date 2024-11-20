---
title: Progressive enhancement creando una web para todos
category: programming
language: es
tags:
  - ProgressiveEnhancement
  - html
  - web
  - frontend
summary: El objetivo del Progressive enhancement (mejoras progresivas) es de hacer un sitio que funcione en cualquier navegador, sin perjudicar los más antiguos y aprovechar todas las funciones de los más modernos.
createdAt: 2015-03-11
updatedAt: 2015-03-11
---

Mes pasado durante el lanzamiento de Windows 10, Microsoft trajo una gran novedad que todos los desarrolladores web conmemoraron. Microsoft cree que este es el momento de interrumpir el famoso Internet Explorer (IE) y dejar en su lugar el “Proyecto Spartan” — que sigue siendo un “apodo” para el nuevo navegador del sistema operacional.

### Problemas de compatibilidad

El motivo para tanta conmemoración es porque en poco tiempo, la gente dejara de usar el IE y los problemas de compatibilidad con este browser tendrán sus días contados, ya que las versiones 6,7,8 y 9 no tienen soporte o soportan parcialmente las nuevas tecnologías de la web ( HTML 5, CSS 3, etc ).

Pero no todo es un mar de rosas, a pesar del IE comenzar a salir de nuestras vidas sabemos que cuando producimos un sitio los problemas de compatibilidad son parte del juego. Hoy en día los usuarios pueden acceder internet no solamente por tablet y celulares, como también consola de juegos, Tvs, etc. Por este motivo no tenemos garantía de que los navegadores de todos estos dispositivos tengan soporte a las mismas propiedades, y aquí es donde empezamos a tener problemas de nuevo.

No piensen que esta conversa significa que no podemos utilizar lo mejor de HTML5 e CSS3 en nuestros sitios, al contrario debemos usar y abusar para poder enriquecer la experiencia de nuestro usuario. Pero siempre teniendo en mente el “Progressive enhancement”.

El objetivo del Progressive enhancement (mejoras progresivas) es de hacer un sitio que funcione en cualquier navegador, sin perjudicar los más antiguos y aprovechar todas las funciones de los más modernos. Todo al mismo tiempo de una forma progresiva, es decir, comenzar a desarrollar las propiedades básicas y gradualmente añadir pequeñas mejoras que sólo funcionan en los navegadores modernos.

Un ejemplo simples es cuando queremos desarrollar un sistema de upload de archivos. La base es sencilla necesitamos un formulario con una etiqueta

    <input type=”file”/>

Sólo con esto funciona en todas partes. Pero, lógicamente vamos agregar características más modernas como, ofrecer cargar varios archivos al mismo tiempo (IE +10) , poner “Drag & Drop” para la carga automática de los archivos (no funciona en IE 9 o Firefox 3), una vista previa de la imagen que se envió al servidor, o añadir una hermosa barra de progreso de carga, usando sombras y bordes redondeados de CSS3.

Como podemos ver siempre hay nuevas maneras de mejorar alguna función de nuestro sitio utilizando nuevas APIs (Drag & Drop, Canvas, Geolocalización, Efectos CSS3) y mucho más. Pero la base es una forma sencilla de subir, que funciona en navegadores de 15 años atrás.

![](https://cdn-images-1.medium.com/max/2000/0*wWOqkBe3qJ373XHz.)

### Modernizr

Detectar qué navegador soporta tal funcionalidad y sólo añadir a los que son compatibles, es un truco importante para una página funcionar mediante Progressive enhancement. Hacemos lo que se llama “feature detection” (detección de las características de los navegadores). El nombre es bonito y la idea es muy simples: hacer una prueba si el navegador del usuario soporta una característica particular.

El maestro de la feature detection es el proyecto [Modernizr](http://modernizr.com/), una pequeña biblioteca JavaScript que detecta la disponibilidad de las nuevas características de HTML5 y CSS3 en los navegadores. Lo que Modernizr hace es poner a prueba el navegador para ver qué características soporta e inserta clases en el HTML para que se pueda hacer una versión alternativa de visual o solución.

Por ejemplo, si queremos ofrecer la posibilidad de obtener la ubicación del usuario en nuestra aplicación web, por medio de un “if” en Javascript fácilmente podemos ver el soporte a la API de Geolocalización.

    if (Modernizr.geolocation) {

    alert(“Soporte a geolocalización”)

    } else {

    alert(“No soporte a geolocalización”)

    }

### Usando Modernizr

Primero tenemos que descargar la última versión de la biblioteca en [http://www.modernizr.com/](http://www.modernizr.com/). Podemos también personalizar la biblioteca seleccionando las funciones que queremos que Modernizr pruebe en nuestro proyecto. Enseguida tenemos que incluir el archivo .js en nuestras páginas. Una vez hecho esto, inserte la clase “no-js” en la etiqueta HTML.

    <!DOCTYPE html>
    <html lang=”es” class=”no-js”>
      <head>
       <meta charset=”UTF-8">
       <title>Document</title>
      </head>
      <body>

      </body>

    </html>

Bastar ejecutar la página en algun navegador para que Modernizr comience a trabajar. Si el javascript del navegador esta desactivado Modernizr nos avisará, pero si esta todo funcionando normalmente e inspeccionamos el elemento HTML veremos que Modernizr reemplazó el “no-js” con otras clases, indicando lo que el navegador soporta de forma nativa o lo que él no acepta. Será algo como esto:

![](https://cdn-images-1.medium.com/max/2000/0*IUohDTczhnYAOW5o.)

Lo que el navegador no acepta, una clase se inserta con el prefijo no-, por ejemplo, no-touch.

### Ejemplos de uso

Supongamos que deseamos utilizar box-shadow en el proyecto. Navegadores como IE6,7,8 no reconocen esta característica, sería interesante dar una alternativa, de modo que el elemento no sea tan diferente de lo que debería. Por lo tanto, si el navegador no acepta la propiedad box-shadow el usuario verá una borda en su lugar.

    .box {
    box-shadow:0 10px 10px rgba(0, 0, 0, 0.8);
    }

    .no-boxshadow .box {
    border: 1px solid #EEE;
    border-bottom: 3px solid #EEE;
    }

### HTML5Shiv

Con la especificación de HTML5 surgió 30 nuevas etiquetas y entre estas etiquetas tenemos etiquetas estructurales como `<header>`, `<footer>`, `<section>`, `<nav>`, `<artículo>`. Sin embargo, navegadores antiguos (IE 6,7,8) no reconocen estos nuevos elementos. Modernizr tiene un script extra llamado HTML5Shiv, que hace con que estos navegadores antiguos reconozcan las nuevas etiquetas html

Por estos y otros motivos usar Modernizr es indispensable, dejando las cosas más fáciles. La idea es de construir proyectos utilizando nuevas tecnologías, haciendo que la producción sea más eficiente, manteniendo el proyecto siempre actualizado con las mejores prácticas del mercado, mejorando la experiencia de los usuarios (UX) y por supuesto dando soporte a la mayoría de los navegadores existentes.
