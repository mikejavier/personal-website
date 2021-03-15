---
title: Plugins Vuex para usar en el próximo proyecto VueJS
category: programming
language: es
tags:
  - vue
  - vuex
  - javascript
  - frontend
summary: Existe una gran cantidad de plugins creado por la comunidad que quizás no hayas imaginado.
createdAt: 2018-12-10
updatedAt: 2018-12-10
---

Por lo general una aplicación VueJS utiliza Vuex para administrar el estado de la aplicación y ¿Qué tal si agregamos más funcionalidades a Vuex? Existe una gran cantidad de plugins creado por la comunidad que quizás no hayas imaginado.

1 — [Vuex-cache](https://github.com/superwf/vuex-cache)

Con este plugin se puede almacenar en caché las actions de Vuex. Muy útil cuando estamos recuperando datos de un servidor, este complemento almacenará en caché el resultado la primera vez que hagamos la petición, luego devolverá el valor almacenado en caché en los envíos posteriores.

2 — [Vuex-persistedstate](https://github.com/robinvdvleuten/vuex-persistedstate)

Utiliza el almacenamiento local del navegador para mantener el estado de la aplicación. Esto significa que actualizar la página o cerrar una pestaña no borrará nuestro *state*.

3 — [Vuex-orm](https://github.com/vuex-orm/vuex-orm)

Permite crear un esquema de datos “normalizado” dentro de Vuex Store con relaciones como “Has One” and “Belongs To Many” como cualquier otra biblioteca ORM habitual. También proporciona una API fluida para obtener, buscar y actualizar el estado del *store*.

4 — [Vuex-router-sync](https://github.com/vuejs/vuex-router-sync)

Plugin útil cuando se está tratando de utilizar el objeto `$route` en los metodos Vuex.

5 — [Vuex-shared-mutations](https://github.com/xanf/vuex-shared-mutations)

Sincroniza el estado entre diferentes pestañas del navegador. Lo hace almacenando una mutación en el *local storage*. El evento de almacenamiento desencadena una actualización en todas las demás pestañas/ventanas, que reproduce la mutación, manteniendo el estado sincronizado.

6 — [Vuex-i18n](https://github.com/dkfbasel/vuex-i18n)

Permite almacenar fácilmente el contenido en varios idiomas, muy similar a [vue-i18n](https://github.com/kazupon/vue-i18n). Encontré una [issue](https://github.com/dkfbasel/vuex-i18n/issues/80) que habla al respecto de la diferencia entre las dos *libs*.

¿Conoces otros plugins? Deja en los comentarios abajo.
