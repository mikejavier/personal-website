---
title: Diseño responsivo entienda como funciona
category: programming
language: es
tags:
  - css
  - html
  - responsive
summary: El diseño responsivo consiste en proporcionar una buena experiencia de navegación al usuario, independientemente de la utilización de una computadora de escritorio, tableta o smartphone.
createdAt: 2015-02-26
updatedAt: 2015-02-26
---

> “Diseño Responsivo (Responsive Web Design) es un enfoque para la creación de sitios web donde la experiencia del usuario está optimizada independientemente de la forma que se accede a > la web, facilitando la navegación y desplazamiento en cualquier caso.” Wikipedia.

### Diseño Responsivo

El diseño responsivo consiste en proporcionar una buena experiencia de navegación al usuario, independientemente de la utilización de una computadora de escritorio, tableta o smartphone, es decir, sin importar el dispositivo, su sitio tiene que adaptarse en una resolución de 1024x780px o de 320x480px. Para eso existen varias técnicas que se pueden utilizar para alcanzar un diseño responsivo. los principales son:

![layout breakpoints example](https://cdn-images-1.medium.com/max/2000/0*Hdne4RhLk8fG-B3U.)

### Media queries

A continuación dejo un código para explicar mejor las Media queries

    @media (max-width: 480px) { … } @media (max-width: 768px) { … } @media (min-width: 768px) and (max-width: 980px) { … } @media (min-width: 1200px) { .. }

    @media (max-width: 480px) { … }

    @media (max-width: 768px) { … }

    @media (min-width: 768px) and (max-width: 980px) { … }

    @media (min-width: 1200px) { .. }

Se utilizan Media queries para determinar cómo el sitio debe tener el formato de acuerdo con la resolución del dispositivo utilizado.

    @media (max-width: 480px){

    /* Aqui van todos los estilos de los elementos quando

    el sitio es visto por una tela con maximo 480 px de ancho */

    }.

Obs.: Los valores utilizados son los más comunes e incluye la mayoría de los dispositivos, pero nada impide que se modifiquen.

### Diseño Fluido

Esta técnica de diseño consiste en construir todo en porcentajes. No habrá más una div principal con 980px de ancho, con un menú lateral de 300px y contenido de 650px. Haciendo un poco de matemáticas simples vamos a transformar los px en %. Un ejemplo práctico …

1° — La div principal se establece en el 100%.

2° — La barra lateral será de 30.61%, porque 300/980 = 0,306122 ….. Cambiando la coma 2 casas decimales, llegamos a nuestro resultado final.

3° — La div contenido seguirá la misma lógica, entonces será 66,32%

Como pueden ver no importa el tamaño de la pantalla, siempre las divs se ajustan, ya que las medidas ya no son fijas. La única desventaja de esta técnica es que en la mayoría de los casos van haber dos versiones de la página web, una para móvil y otra de escritorio.

### Grids

![grid example](https://cdn-images-1.medium.com/max/2000/0*g6jOshv40VDC5YYR.)

El sistema de grids sigue básicamente una teoría similar a la de fluidos, la diferencia es que el div principal no va estar tan libre, porque siempre será en función del grid. Grid no es más que una cuadrícula dividida en columnas y las columnas tienen un ancho determinado y un cierto espacio. Hay grids de 12, 16, 18 o 24 columnas. El más recomendado de trabajar es de 12. Ahora sólo queda adaptar nuestro sitio y hacer las divs con la simetría de las columnas, por ejemplo:

Div principal ocupará 12 columnas Sidebar, ocupará 4 columnas

Div contenido, 6 columnas con un espacio de 2 columnas del sidebar.

### Etiqueta meta viewport

Para crear un diseño responsivo, tenemos que utilizar la etiqueta meta viewport. Vamos a entender por partes. Viewport no es más que el nombre dado a la zona disponible para mostrar el sitio. Ya deben haber entrado en un sitio no responsivo desde su teléfono inteligente y se dieron cuenta de que el sitio aparece completo en pantalla, pero con todos sus elementos disminuidos. Esto es porque la mayoría de los navegadores de los dispositivos móviles, suponen que todas las páginas están diseñadas para computadores de escritorio (con ancho de 980px), entonces se aleja de la página de forma automática hasta que se ajuste en el interior de la pantalla (Viewport).

    <meta name=”viewport” content=”width=device-width, initial-scale=1">

Ahí viene la función de la etiqueta, con la declaración de la misma, el navegador entenderá automáticamente que el sitio está hecho para dispositivos móviles y no lo hará “reducir”.

### Responsivo vs Adaptativo

Imaginemos la siguiente situación, una empresa contrata a un desarrollador y pide que el sitio se ajuste a todo tipo de dispositivos. Ahora pensemos en los principales dispositivos, smartphone, tablets, pcs, smartTV. Probablemente serían por lo menos 4 sitios diferentes. Si existe la necesita de reescribir por completo todos los elementos del sitio, estamos haciendo diseño adaptativo, que en teoría tiene la misma función, sin embargo, responsivo se centra en la economía. Tenemos que pensar y escribir estructuras que, mismo sufriendo modificaciones, se pueden volver a utilizar.

### Conclusión

No podemos negar que el futuro de la web es móvil. Queda para nosotros desarrolladores el reto de empezar a pensar paginas para adaptarse a los nuevos dispositivos. El Diseño Responsivo llegó con fuerza para mejorar la experiencia del usuario y en este artículo nos dimos cuenta de que hay muchos tipos de técnicas que funcionan bien con el diseño responsivo, cada uno es útil en un contexto dado. Lo ideal es probar varios hasta encontrar el que realmente funciona y se adapta al proyecto en desarrollo.
