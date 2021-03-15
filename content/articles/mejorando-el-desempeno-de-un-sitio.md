---
title: Mejorando el desempeño de un sitio
category: programming
language: es
tags:
  - web
  - tips
  - perfomance
summary: Un buen desempeño en el requisito velocidad es el primer paso para atraer a los visitantes y mejorar la experiencia del usuario.
createdAt: 2015-06-23
updatedAt: 2015-06-23
---

Hablamos tanto de HTML5, CSS3, Javascript y todas las otras tecnologías web que nos olvidamos de otras cosas también importantes, así como el desempeño ( perfomance ). Un buen desempeño en el requisito velocidad es el primer paso para atraer a los visitantes y mejorar la experiencia del usuario. La gente odia esperar, especialmente en Internet. Los motores de búsqueda como Google utilizan el factor velocidad de carga como uno de los parámetros para para clasificar un sitio en la búsqueda. Entregar un sitio lento y complicado para los usuarios es uno de los crímenes de usabilidad que no se debe cometer nunca.

Hay literalmente cientos de maneras de aumentar el rendimiento de un sitio. Los métodos varían y algunos son obviamente más eficaces que otros. Las tres áreas principales que se puede trabajar son: hardware (servidor web), el lado del servidor (PHP, Python, Java, etc) y el front-end.

Este artículo se centra en el tercer punto y para comenzar tenemos primeramente que inspeccionar la página para encontrar a los culpables. Los browser modernos ya vienen integrados con herramientas que auxilian en el desarrollo. El “devtools” no ayuda a determinar qué componentes (imágenes, archivos CSS, documentos HTML, archivos de javascript, etc.) están siendo solicitada por el usuario, el tiempo que tarda en cargar y cuán grande son (tamaño en KB). En general, se debe mantenerlos lo más pequeño posible.

### Optimizar imágenes

Las imágenes son las principales responsables de dejar un sitio lento y con bajo rendimiento. En la mayoría de los casos podemos reducir el tamaño de una página en más de 50% solo con la optimización de imágenes. Los siguientes tips nos ayudan a usar imágenes en nuestra página sin afectar tanto el desempeño.

**CSS Sprites**
 Esta técnica consiste en agrupar varias imágenes en un único archivo. Usando la propiedad CSS background-position se define qué parte de la imagen queremos mostrar. La combinación de varias imágenes de esta manera, puede reducir las peticiones HTTP y reducir las peticiones HTTP es un paso importante hacia la mejora en el rendimiento.

**Guardar las imágenes en el formato correcto**
 Es esencial aprender acerca de los diferentes formatos y cuál es el ideal para cada imagen. Hay tres formatos comunes de imágenes en la web: JPG, GIF y PNG. En general, se debe utilizar JPG para fotos realistas con gradaciones suaves y tonos de color (gradientes) y GIF o PNG para imágenes con colores sólidos (como gráficos y logos).

### Disminución de request

Así como las imágenes los archivos JS, CSS y cualquier otro componente crea una solicitud HTTP en el servidor. Es decir que si tenemos cinco archivos CSS a una página, al menos cinco solicitudes HTTP separadas harán que el browser tarde en renderizar nuestra web. La solución es llamar los menos archivos posibles eso es posible al unir la mayoría de estos archivos. Por ejemplo: en lugar de tener cinco archivos CSS, ponemos el contenido de estos cincos archivos en uno solo.

### Minificar / Compactar HTML, CSS y JS

Todo desarrollador sabe la importancia de mantener un código legible con comentarios. Sin embargo, para el navegador nada de eso importa, así que podemos comprimir nuestros archivos retirando espacio en blanco, comentarios, etc. Por ejemplo:

¡No se asuste! No es necesario formatear el código manualmente, hay un montón de herramientas gratuitas disponibles para minimizar los archivos CSS y Javascript.

### Estilos en la parte superior e javascript en la inferior

Utilice siempre las llamadas CSS dentro de la etiqueta

    <head></head>

por lo que la página se carga ya con los estilos, dando la impresión de que la página se carga más rápido. Lo contrario pasa con los archivos JS que “bloquean” la carga de la página, ya que se descargan y ejecutan. Debido a esto, los archivos JavaScript deben ser llamados en la parte inferior de la página justo antes de la etiqueta

    </body>

### Habilitar GZIP en el servidor

Al habilitar GZIP en el servidor cuando los archivos sean solicitados primero serán comprimidos antes de seren enviados al navegador del usuario. Para poder utilizar el GZIP sugiero este código, que debe ser colocado en el archivo .htaccess

    <IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE image/svg+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/atom_xml
    AddOutputFilterByType DEFLATE application/x-javascript
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-httpd-php
    AddOutputFilterByType DEFLATE application/x-httpd-fastphp
    AddOutputFilterByType DEFLATE application/x-httpd-eruby
    AddOutputFilterByType DEFLATE text/html
     
    SetOutputFilter DEFLATE
     
    BrowserMatch ^Mozilla/4 gzip-only-text/html
     
    BrowserMatch ^Mozilla/4.0[678] no-gzip
     
    BrowserMatch ^HMSI[E] !no-gzip !gzip-only-text/html
     
    SetEnvIfNoCase Request_URI .(?:gif|jpe?g|png)$ no-gzip dont-vary
    </IfModule>

Luego pueden entrar en [http://checkgzipcompression.com/](http://checkgzipcompression.com/) para verificar si el GZIP está activado.

Con el uso de estas técnicas ya podemos notar una diferencia muy considerable en el tiempo carga de la página. Para probar el tiempo de carga [Google ofrece una excelente herramienta](https://developers.google.com/speed/pagespeed/insights/). Otra referencia muy interesante es el sitio [http://browserdiet.com/](http://browserdiet.com/) allí también encontrarán algunos consejos para “bajar de peso” de la página web.

