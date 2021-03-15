---
title: Introduciendo git a nuestros proyectos
category: programming
language: es
tags:
  - git
summary: Creada en 2005 por Linus Torvalds( mismo creador de Linux), que no estaba contento con el BitKeeper sistema de control de versiones utilizado en el desarrollo del kernel de Linux.
createdAt: 2015-07-18
updatedAt: 2015-07-18
---

La vida de un programador no es fácil, siempre hay presión para entregas rápidas de proyectos o de nuevas funciones. Pero a pesar de la prisa es importante tener cuidado y prestar atención a los cambios que estamos haciendo (así sean pequeños) para no romper lo que ya funciona.

Por este motivo movemos lo menos posible en el código y tenemos miedo de eliminar algunos partes de código obsoleto, que no se utilizan e incluso código comentado, a pesar de que ya ni siquiera tiene sentido mantenerlo. Por otro lado es interesante para mantener el proyecto tener un historial de códigos, para entender cómo hemos llegado hasta allí principalmente si trabajamos en equipo, ya que nuestro código debe integrarse de forma transparente y sin problemas con el código de todos los demás miembros. Pero con el pasar del tiempo tener presente el historial junto al código actual, dejará todo una sola confusión.

Existen herramientas que nos permiten rastrear cambios en los códigos de versiones anteriores. También es posible detectar y fusionar los cambios en los mismos archivos e identificar conflictos, todo de forma automáticamente. Estas herramientas son llamadas de sistema de control de versiones.

Desde la década de 1990 existe este tipo de herramienta. Algunos ejemplos de sistemas de control de versiones antiguas son CVS, ClearCase, Fuente-Safe y SVN (que todavía se utiliza ampliamente en los negocios). A mediados de la década de 2000, había sistemas de control de versión más moderna, más rápida y fiable, como Mercurial, bazar y, por supuesto, Git.

### GIT

Creada en 2005 por Linus Torvalds( mismo creador de Linux), que no estaba contento con el BitKeeper sistema de control de versiones utilizado en el desarrollo del kernel de Linux.

Hoy en día, además del núcleo de Linux, la herramienta se utiliza en diversos otros proyectos de código abierto. Git también es ampliamente utilizado en las empresas de todo el mundo. Actualmente, conocer bien cómo usar Git es una habilidad importante para una exitosa carrera de cualquier desarrollador.

### Instalación

Antes de usar Git, es esencial [instalarlo](https://git-scm.com/downloads). Basta escoger el sistema operacional apropiado y manos a la obra!

OBS.: La forma más común de usar Git es por línea de comandos, accesible a través de un terminal. Es la forma en que la mayoría de los buenos profesionales del mercado usan Git y será la opción de este tutorial. Si no tienes el hábito de usar el prompt puedes instalar cualquier [aplicación visual para trabajar con Git](https://git-scm.com/downloads/guis).

### Ajustes Básicos

Es importante identificar a nosotros mismos en Git, indicando nuestro nombre y e-mail. Para esto el terminal tenemos que ejecutar los siguientes comandos:

    git config user.name –global “John Doe”

    git config –global user.email "johndoe@email.com"

Por supuesto, utilice su nombre y correo electrónico!

## Controlando un proyecto

En el mismo terminal, vayamos hasta la carpeta del proyecto que deseamos empezar a versionar y utilicemos el comando:

    git init

Este comando creará un directorio invisible dentro del proyecto denominado .git. Contiene todos los archivos necesarios del repositorio. En este punto aún no están siendo controlado nada de los archivos. solamente creamos un “lugar” (branch) para Git poner los archivos.

El siguiente comando insertará los archivos que deseamos controlar. Por lo general, gestionamos todo lo que está en el proyecto:

    git add .

Una vez hecho esto vamos hacer nuestro primer commit, que nada más es que mandar nuestras alteraciones a GIT.

    git commit -m “este es mi primer commit”

Hicimos los cambios en los archivos, luego el commit describiendo exactamente ese cambio y ahora necesitamos enviar todo al servidor. El comando git push “empuja” los cambios al servidor. Cuando los otros miembros del equipo hagan un git pull, estos cambios se descargarán en el repositorio local de la persona.

    git push

Como dicho anteriormente probablemente habrá más gente trabajando con nosotros que también están haciendo cambios en los archivos, por eso es importante dejar el proyecto actualizado. Para ello, hay que “traer” los cambios y commits que se han hecho para el repositorio local. Para esto utilizaremos el comando:

    git pull

Estos fueron los 5 comandos más básico de Git para poder versionar algún proyecto con nuestro equipo de desarrollo. Pero hay algunas otras opciones/comando, que podemos utilizar como por ejemplo: especificar la rama donde vamos a empujar o buscar actualizaciones, ver el estado de nuestros archivos, ver todos los commit hechos por otros miembros, clonar un proyecto etc. Para saber más sobre sobre todos los comandos y algunas cosas interesantes, les recomiendo “[git — la guía sencilla](http://rogerdudler.github.io/git-guide/index.es.html)” hecho por Roger Dudler.

Por ser objetiva la [documentación de Git](http://git-scm.com/docs) también es muy fácil de leer y entender, para quien no perder el tiempo con bla, bla, bla… recomiendo quien desea saber mejor cómo utilizar git en sus proyectos.
