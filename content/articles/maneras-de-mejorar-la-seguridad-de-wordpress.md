---
title: Maneras de mejorar la seguridad de WordPress
category: programming
language: es
tags:
  - wordpress
summary: Demos un vistazo para algunos consejos de seguridad que todo administrador de sitios hechos con WordPress deben tener para evitar problemas y dolores de cabeza.
createdAt: 2015-02-24
updatedAt: 2015-02-24
---

Después de conocer el maravilloso mundo de WordPress, vimos que este cms es una plataforma semántica de publicación personal, con un enfoque en la estética, los estándares web y usabilidad. Sabemos que el WordPress es un software gratuito y a pesar de los desarrolladores tomaren la seguridad muy en serio, no estamos libres de cualquier falla. Por este motivo como cualquier otro sistema, existen problemas de seguridad potenciales que pueden surgir si no se toman algunas precauciones básicas.

Demos un vistazo para algunos consejos de seguridad que todo administrador de sitios hechos con WordPress deben tener para evitar problemas y dolores de cabeza. Son técnicas simples que ayudan bastante a protegerse, pero puedo adelantar que la mejor opción para evitar que estas amenazas sucedan es ser proactivo acerca de la seguridad de WordPress. La mayoría de los administradores de los sitios de WordPress sólo buscan descubrir más sobre la seguridad de WordPress después de sufrir una invasión y el mayor error es pensar que nunca nos va a pasar.

![](https://cdn-images-1.medium.com/max/2000/0*SuxKDeepHGi7lKSz.)

### Siempre mantener el WordPress actualizado

A cada nueva versión de WordPress actualizaciones y revisiones son hechas destinadas a la seguridad. Generalmente las actualización no afectarán al sitio propiamente dicho, y si a funciones y procesos del WordPress. Por eso siempre mantener plugins, plantillas y el propio sistema actualizados.

### Hacer copias de seguridad

Copias de seguridad de la base de datos es de extrema importancia. Esta es una frase tan cliché, pero es sin duda la mejor acción para prevenir los dolores de cabeza con alguna invasión o mal funcionamiento de temas o plugin que puedan perjudicar el sitio.

Probablemente ya deben conocer Dropbox , pero ¿sabían que puede ser una gran herramienta de copia de seguridad de WordPress?. Les presento el [WordPress Backup to Dropbox](https://wordpress.org/plugins/wordpress-backup-to-dropbox/), este plugin tiene en su nombre exactamente su función. Podemos elegir qué archivos o carpetas deseamos excluir de la copia de seguridad, también permite la programación del backup, simplemente seleccionando la fecha, la hora y la frecuencia con que se desea repetir la copia de seguridad. Este plugin utiliza el OAuth para que los detalles de su cuenta de Dropbox no se almacena con el plugin.

### Desactivar la opción “Cualquiera puede registrarse”

Esta es la opción que permite que cualquiera pueda registrarse en su sitio web, el problema es que muchos sitios de WordPress utilizan esta funcionalidad para captar emails, pero en vez de eso se pueden anular esta función y con un formulario de newsletter continuar capturando emails de una forma más segura. Por defecto esta opción está desactivada, pero para asegurarse, basta ir a la pestaña Configuración y desmarcar la casilla “cualquier persona puede registrar”.

También confirmar si la opción “Perfil predeterminado para nuevos usuarios” está ajustado a “suscriptor” como precaución adicional.

### Limitar el número de intentos de login

Los usuarios no autorizados pueden tratar de iniciar sesión en el sitio usando una variedad de combinaciones de nombres de usuario y contraseñas (fuerza bruta), con el uso de programas especiales para esta tarea y dependiendo de la clave es probable que tengan éxito. Para evitar este tipo de ataque recomiendo instalar el plugin “[Login LockDown](http://wordpress.org/plugins/login-lockdown/)” para limitar una cuota en el número de intentos de conexión que un solo usuario puede hacer, caso las tentativas superen este número, el usuario será bloqueado.

### Confirmación de la Información de login

Tal vez el principal inconveniente del sistema de login de WordPress es que te dice qué parte de la información de inicio de sesión se informó incorrectamente. Por ejemplo, si introducimos el nombre de usuario y contraseña es incorrecta, WordPress informará al usuario de que la contraseña es incorrecta. Esto hace que sea más fácil forzar el acceso de inicio de sesión. Este problema puede ser resuelto mediante la inserción del código de abajo en el archivo functions.php de la plantilla.

    function failed_login () { return ‘Usuario o Clave incorrectos.’ } add_filter ( ‘login_errors’, ‘failed_login’ );<span style=”font-family: Arial, Georgia, ‘Times New Roman’; font-size: 13px;”> </span>

    function failed_login () {

    return ‘Usuario o Clave incorrectos.’

    }

    add_filter ( ‘login_errors’, ‘failed_login’ );<span style=”font-family: Arial, Georgia, ‘Times New Roman’; font-size: 13px;”> </span>

## No informar la versión del WordPress

Parece una información inofensiva, pero permite que la gente con malas intenciones explore vulnerabilidades específicas de las versiones de WordPress utilizado. Hay que tener en cuenta que cualquiera con conocimientos básicos, puede averiguar qué versión es la plataforma que su sitio está utilizando.

Con el código abajo se puede prevenir esta información:

    function remove_wp_version () { return ‘’; } add_filter ( ‘the_generator’, ‘remove_wp_version’ );

    function remove_wp_version () {

    return ‘’;

    }

    add_filter ( ‘the_generator’, ‘remove_wp_version’ );

Estas son algunas de las acciones que deben ser tomadas para prevenir ataques al sitio, mismo con mínimo de conocimiento en WordPress, con la realización de estos pasos básicos se aumenta la seguridad. ¿Conocen otras tácticas? Intercambia tus experiencias con nosotros.
