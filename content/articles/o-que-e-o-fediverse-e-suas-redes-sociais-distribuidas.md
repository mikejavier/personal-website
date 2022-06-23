---
title: O que é o Fediverse e suas redes sociais distribuídas
category: foss
language: pt
tags:
  - fediverse
  - foss
  - open-source
summary: Imagina que você possa fazer um tweet e marcar seu amigo do instagram e ele por sua vez sem ter conta de twitter consiga comentar na sua postagem. Interessante né?
createdAt: 2022-06-22
updatedAt: 2022-06-22
---

O Fediverse (um portmanteau de "federation" e "universe") é uma rede de redes sociais (existem outros tipos de aplicações também) que se comunicam umas com as outras. Para ficar um pouco mais claro, imagina que você possa fazer um tweet e marcar seu amigo do instagram e ele por sua vez sem ter conta de twitter consiga comentar na sua postagem. Interessante né? então pega um café que a história vai começar.

As plataformas mainstream (Facebook, Twitter, Instagram, etc.) concentram milhões de usuários em um único servidor, [onde eles controlam todas as tomadas de decisão](https://www.businessinsider.com/tumblr-bans-nfsw-content-and-users-say-the-platform-will-suffer-2018-12), [aplicam censuras](https://blog.twitter.com/en_us/topics/company/2020/suspension) e [armazenam dados privados dos usuários para lucro comercial e espionagem](https://en.wikipedia.org/wiki/Facebook%E2%80%93Cambridge_Analytica_data_scandal). Por outro lado as redes do Fediverse são distribuídas, isso quer dizer, são desenvolvidas por uma comunidade de pessoas em todo o mundo, independente de qualquer corporação ou instituição oficial. Você é livre para se registrar em qualquer instancia("site") que desejar, ou se você tiver conhecimentos técnicos, poderá administrar sua própria instância, tendo poder sobre seus dados e ficando livre de anúncios e algoritmos manipuladores.

Essas redes sociais distribuídas começaram a aparecer por volta de 2008-2010 em resposta a temores de que as redes centralizadas ameaçassem a privacidade e a autonomia de seus usuários. Uma dessas redes sociais distribuídas foi a GNU Social que é bem parecida com o Twitter e rodava na plataforma StatusNet. O ecossistema continuou evoluindo e várias outras plataformas começaram a ser criadas e além disso começaram a utilizar um novo protocolo chamado OStatus nascendo assim o Fediverse.

![Redes sociais com protocolos diferentes](https://i.imgur.com/RiBmBl4.png)

Na mesma época também existia o Federation, que era um outro conjunto de redes mais parecidas com o Facebook e utilizavam um padrão de comunicação diferente do OStatus, também estava evoluindo. Ambos ecossistemas continuaram os trabalhos até que em 2018, o W3C apresentou o protocolo ActivityPub, com o objetivo de melhorar a interoperabilidade entre todas essas plataformas. Com o tempo, essas distintas redes começaram aderir ao novo protocolo criando assim uma supernetwork federada.

![Redes sociais usando o ActivityPub](https://i.imgur.com/D9pNZBj.png)

[Fonte das imagens](https://medium.com/we-distribute/a-quick-guide-to-the-free-network-c069309f334) por Sean Tilley

## Lista com algumas aplicações que fazem parte do Fediverse

- [Mastodon](https://joinmastodon.org/) e [Pleroma](https://pleroma.social/) - Clones do twitter/tumblr, porém sem a toxicidade dos extremistas que habitam nelas. Um detalhe do Pleroma é que o back-end é mais leve do que o Mastodon e a interface de usuário é mais personalizável.
- [Misskey](https://misskey-hub.net/en/) - É uma das redes mais novas com muitas características, customizações e plugins.
- [PixelFed](https://pixelfed.org/) - Clone do instagram, ideal para quem curte compartilhar vídeos e fotos.
- [Peertube](https://joinpeertube.org/) - Clone do youtube, rede descentralizada para hospedar vídeos.
- [Lemmy](https://join-lemmy.org/) e [Prismo](https://gitlab.com/prismosuite/prismo) - Clones do Reddit.
- [Diaspora](https://diasporafoundation.org/) - Clone G+, muitos usuários migraram para a diáspora quando G+ morreu
- [Friendica](http://friendi.ca/) - Clone do G+/myspace/facebook/twitter..... ou seja todas as redes combinadas.
- [Hubzilla](https://hubzilla.org/) - Rede social para programadores, altamente editável com muitos plugins e pode hospedar até site.
- [FunkWhale](https://funkwhale.audio/) - Site de compartilhamento de músic (homenagem ao Grooveshark.com)
- [Mobilizon](https://mobilizon.org/en/) e [Bonfire](https://bonfirenetworks.org/) - Alternativas para organizar comunidades igual ao meetup.com
- [BookWyrm](https://bookwyrm.social/) - Uma alternativa ao GoodReads
- [Owncast](https://owncast.online/) - Alternativa a Twitch
- [WriteFriendly](https://writefreely.org/) e Plume - Redes para iniciar um blog minimalista e federado ou até comunidades.
- [ActivityPub for WordPress](https://wordpress.org/plugins/activitypub/) - Um plugin ActivityPub para WordPress. :heart:

Essa lista são somente algumas das aplicações mais conhecidas, mas tem outras que nos proporcionam tudo e mais um pouco comparadas às mainstream. O Mastodon é o mais popular de todas e boa entrada para os iniciantes. Eu particularmente uso o Pleroma que apesar de ter menos funcionalidades atende perfeitamente minhas necessidades (instância de uma única pessoa). Aproveita para me seguir [@mikejavier@social.michaelsantillan.com](https://social.michaelsantillan.com/mikejavier)

Não importa qual plataforma você escolha, todas permitem publicar links, fotos, textos, vídeos, seguir amigos e o melhor de tudo sem algoritmos manipulando a informação ou publicidades pulando na sua timeline.
