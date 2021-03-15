---
title: HTML 5 y una web semántica
category: programming
language: es
tags:
  - html
  - web
summary: La Web Semántica es nada menos que una web con toda la información organizada de una manera que no sólo seres humanos puedan entender, como también las máquinas( computadoras, celulares, consolas de juegos, etc).
createdAt: 2015-03-17
updatedAt: 2015-03-17
---

Partiendo de la premisa de que los seres humanos necesitan renovar constantemente sus conceptos está surgiendo una nueva forma de interactividad entre el usuario y el Internet. Actualmente, el Internet es un espacio donde se encuentra información del mundo todo a través de diversas fuentes, algunas confiables, otras no. Con el crecimiento de esta red de comunicación y las grandes proporciones de impacto por toda su facilidad de acceso y publicación de información, el volumen de datos se ha convertido en algo incontrolable y a veces caótico.

![](https://cdn-images-1.medium.com/max/2000/0*Qll2zRSx49F6xV9m.)

### ¿Qué es la Web Semántica? ¿Qué tecnología está detrás de todo esto? ¿Cuáles son las ventajas y desventajas para los usuarios?

La Web Semántica es nada menos que una web con toda la información organizada de una manera que no sólo seres humanos puedan entender, como también las máquinas( computadoras, celulares, consolas de juegos, etc). Un ejemplo práctico es cuando realizamos una búsqueda de un término en Google, obtenemos una secuencia de resultados con varios temas relacionados al nuestro, mismo que nuestro objetivo era sólo para encontrar su definición. En una internet más semántica, esta búsqueda sería mejor definida, debido a la construcción de esta nueva web, destinada a mejorar el contenido, mejorando la experiencia de los resultados y al mismo tiempo la experiencia de los usuarios.

### Tecnología

Existen varias tecnologías importantes para el desarrollo de la Web Semántica, pero tres ya son bien conocidas: HTML (HyperText Markup Language), CSS (Cascading Style Sheets) y Javascript. HTML permite que todos creen sus propias páginas web, con etiquetas que ayudan en el desarrollo, pero quién vaya a desarrollar el código tiene que saber que etiquetas utilizar en el momento adecuado. En resumen, las etiquetas HTML son la forma más correcta para hacer una página semántica, que son las que definen en particular el tipo de información que es y en que determinada parte de la página es exhibida, como en el ejemplo a continuación.

![](https://cdn-images-1.medium.com/max/2000/0*X7MpwofsIa7mO2HG.)

### HTML 5

Esta nueva versión html además de enfatizar la semántica y la accesibilidad, trae cambios importantes, como nuevas funciones que antes solo eran posibles con otras tecnologías. Además en una era donde los sitios web tienen que [adaptar sus diseños para trabajar en cualquier tipo de dispositivo](https://medium.com/@mikejavier/dise%C3%B1o-responsivo-entienda-como-funciona-5f0729132b11), esta nueva versión mejoró el lenguaje con soporte para los últimos dispositivos multimedia y ya es soportado por los navegadores más populares en sus versiones actuales, esto incluye el Internet Explorer 9 que ejecuta HTML 5 de una manera razonable.

El problema es con versiones anteriores de Internet Explorer ( 8 y 7 ) que no tienen soporte a HTML 5. Una solución a este problema es el uso de bibliotecas como, [Modernizr](https://medium.com/@mikejavier/mes-pasado-durante-el-lanzamiento-de-windows-10-microsoft-trajo-una-gran-novedad-que-todos-los-89f4b3823e71), que permite comprobar la compatibilidad de la mayoría de las características de HTML 5 y CSS 3.

### Sintaxis

El código es más limpio y más fácil de leer, lo que aumenta la productividad del desarrollador. Con HTML 5, la sintaxis puede ser la de HTML 4, es decir, sin las restricciones de XHTML ( cierre de etiquetas, etiquetas y propiedades en minúsculas, valores entre comillas, etc.), o continuar con las características principales de la sintaxis XHTML. Como la nueva versión de HTML es para facilitar la vida, nada impide que se utilice HTML 5 o XHTML5.

### Nuevas etiquetas

Antes de la versión 5, lo más común y normal era utilizar `<div>` para estructurar un sitio. Ahora, es posible sustituirlo por nuevos elementos estructurales que pueden ayudar a definir las partes de un documento.

```
<header>

<nav>

<section>

<article>

<aside>

<footer>
```

Estas etiquetas sirven para agrupar más elementos que para el posicionamiento de ellos. Es decir, se puede tener múltiples `<section>` en una página, cada una con su propia `<header>` y `<footer>`. Son similares a las clases css, se pueden usar más de una vez en la página.

**Un detalle importante: No hay que confundir el `<head>` con el `<header>`. El primero es un elemento de información, el segundo elemento es de estructura. El `<title>`, por ejemplo, sólo puede ir en la `<head>` y no en `<header>`.**

Para ver la lista completas de las nuevas etiquetas y sus funciones entra en [http://www.w3schools.com/html/html5_new_elements.asp](http://www.w3schools.com/html/html5_new_elements.asp%20)

Aqui les dejo un ejemplo de una página básica hecha en HTML 5.

```
<!DOCTYPE html>
<html lang="es">
<head>
 <meta charset="UTF-8">
 <title>Titulo</title>
</head>
<body>
 <header>
  <div class="logo"></div>
  <nav class="menu">
   <ul>
    <li><a href="#">link</a></li>
    <li><a href="#">link</a></li>
    <li><a href="#">link</a></li>
    <li><a href="#">link</a></li>
   </ul>
  </nav>
 </header>
 
 <main>
  <section class="principal">
   <article class="publicacion">
    <header class="publicacion-detalles">
     <span>Esta articulo fue publicado el <time>16.03.2015</time></span>
     <h1 class="publicacion-titulo">El titulo de la publicacion</h1>
    </header>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda optio placeat illo vero nisi, laudantium tempora sunt minus doloremque eveniet accusantium quod hic molestias omnis nostrum eaque quo beatae. Dignissimos?</p>
    
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda optio placeat illo vero nisi, laudantium tempora sunt minus doloremque eveniet accusantium quod hic molestias omnis nostrum eaque quo beatae. Dignissimos?</p>
    
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda optio placeat illo vero nisi, laudantium tempora sunt minus doloremque eveniet accusantium quod hic molestias omnis nostrum eaque quo beatae. Dignissimos?</p>
    
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda optio placeat illo vero nisi, laudantium tempora sunt minus doloremque eveniet accusantium quod hic molestias omnis nostrum eaque quo beatae. Dignissimos?</p>
   </article>
  </section>

  <aside>
   <div class="widget">
    <h2 class="widget-titulo">Titutlo del Widget</h2>
   </div>
  </aside>
 </main>

 <footer>my copyright - 2015</footer> 
</body>
</html>
```

### Conclusión

La web semántica se ha venido desarrollando con el paso del tiempo, y el HTML 5 llegó para ayudar en este proceso. Queda a nosotros desarrolladores la responsabilidad de comenzar a escribir códigos más limpios y páginas web más accesibles. Es un proceso algo complejo, pero con dedicación y esfuerzos los resultados serán satisfactorios.
