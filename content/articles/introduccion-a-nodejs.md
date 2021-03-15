---
title: Introducción a Node.js
category: programming
language: es
tags:
  - node
  - javascript
  - backend
summary: Node.js es una plataforma construida en el motor JavaScript de Google Chrome para construir fácilmente aplicaciones de red rápidas y escalables.
createdAt: 2015-03-23
updatedAt: 2015-03-23
---

Muchas personas todavía se preguntan ¿para qué sirve Node.js?, ¿Qué es Node.js? y así sucesivamente, por eso que voy a tratar aquí de ayudar con una introducción, eso mismo… una introducción, porque el poder de node.js es mucho mayor de lo que iré describir en las próximas líneas. Confeso que aún estoy conociendo a fondo node.js, ya que lo conocí principalmente para instalar herramientas de front-end como Grunt y Bower.

### ¿Afinal que es node.js ?

Según está descrito en el propio sitio “Node.js es una plataforma construida en el motor JavaScript de Google Chrome para construir fácilmente aplicaciones de red rápidas y escalables. Node.js utiliza un modelo de I/O dirigida a eventos no bloqueantes que hace que sea ligero y eficiente, ideal para aplicaciones en tiempo real con intenso intercambio de datos a través de dispositivos distribuidos”. Es decir que node.js nos fornece un ambiente de tiempo de ejecución javascript, en el cual podemos acceder a cualquier momento, basta entrar en el terminal y digitar node.

### Instalación

La Instalación de Node.js es extremadamente sencilla, todo lo que se necesita hacer es visitar la [página oficial de Node.js](https://nodejs.org/), hacer clic en “Instalar ” y siga las instrucciones. Después de la instalación, basta ejecutar el siguiente comando en el prompt/terminal para comprobar si se ha instalado correctamente :

### NPM el poder de Node.js

Node.js viene con una utilidad de gestión de paquetes llamado npm , que permite importar bibliotecas de terceros en nuestros flujos de trabajo para utilizar en proyectos. La gestión de paquetes es un aspecto importante en node.js, sin él tendríamos que programar aplicaciones desde cero y reinventar soluciones para problemas comunes que ya han sido resueltos y compartidas por cientos de otros desarrolladores.

Para instalar un biblioteca usando npm, ejecutamos el comando npm seguido del nombre de la biblioteca como su parámetro, ejemplo: npm install -g grunt-cli. Vale resaltar que npm es mucho más útil que un simples instalador. Con npm somos capaces de empaquetar aplicaciones, controlar versiones y compartir nuestros proyectos con otros desarrolladores.

### ¡Hola Mundo!

Aprovechemos este momento de euforia y crear nuestro primer ejemplo. Para esto tenemos que crear un archivo JavaScript que se puede llamar holamundo.js y escribir el siguiente código:

```
// Carga la biblioteca HTTP de Node.js.

var http = require('http');

// Crea un servicio web para tratar la petición de respuesta del mensaje Hola Mundo.

var server = http.createServer(function (request, response) {

// Establece los parámetros de respuesta.

response.writeHead(200, {'Content-Type': 'text/html'});

// Escribe un mensaje de respuesta del servidor.

response.write('<html><body><h1>Hola Mundo</h1></body></html>');

// Envia una respuesta al cliente

response.end();

});

// Establece el puerto y la IP que la aplicación se ejecutará.

server.listen(3000);

// Imprime un mensaje en el terminal del servidor.
console.log('Servidor Node.js iniciado');
```

Ahora basta entrar en el navegador y digitar esta dirección [http://localhost:](http://localhost:) 3000 para ver el mensaje Hola mundo.

Espero que esta introducción haya sido suficiente para causar interés en aprender más sobre Node.js. Para obtener más información y ejemplos de aplicaciones en esta plataforma pueden visitar la [documentación oficial de Node.js](https://nodejs.org/documentation/).
