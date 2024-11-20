---
title: Iniciando com CSS Grid Layout
category: programming
language: pt
tags:
  - html
  - css
  - web
summary: Há um tempo venho experimentando estruturar sites com Flexbox e Grid Layout para entender bem suas propriedades e em um futuro (que agora esta bem próximo) começar a implementar definitivamente nos meus projetos.
createdAt: 2016-01-22
updatedAt: 2016-01-22
---

Há um tempo venho experimentando estruturar sites com Flexbox e Grid Layout para entender bem suas propriedades e em um futuro (que agora esta bem próximo) começar a implementar definitivamente nos meus projetos.

O Flexbox nos ajuda a gerenciar e controlar os seus itens(filhos) de forma conjunta declarando algumas propriedades no “wrap”.

    **[flex-direction: row / column]**
     Escolhemos se os itens serão organizados na horizontal ou vertical.

    **[flex-direction: row-reverse / column-reverse]**
     Modificamos o sentido desses itens (da esquerda para direita ou de baixo pra cima)

    **[flex-wrap: nowrap / wrap / wrap-reverse;]**
     Aqui controlamos se os itens ocupam uma única linha ou forçamos a criação de uma nova

Para distribuir os itens no wrap…

    **[justify-content: flex-start / flex-end / center / space-between / space-around]**
     Distribuímos os itens no wrap na horizontal

    **[align-content: flex-start / flex-end / center / space-between / space-around / stretch]**
     Distribuímos os itens no wrap na horizontal

    **[align-items: flex-start / flex-end / center / baseline / stretch]**
     para o alinhamento dos itens sobre si mesmos

Também é possível selecionar cada item de forma individual

    **[order]**
     Ordena os itens

    **[flex-grow]**
     Gerencia como distribuir os itens no espaço restante em cada linha do wrap

    **[align-self: auto / flex-start / flex-end / center / baseline / stretch]**
     Alterar o alinhamento “align-content” de um item específico

Tem mais alguns detalhes que não citei mas nos links abaixo você terá uma visão detalhada sobre o Flexbox caso ainda não conheça.

[A guide to Flexbox by Css-tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

[Flexbox Froggy](http://flexboxfroggy.com/)

Atualmente o Flexbox é suportado por todos os browsers (IE +10) então, vamos esquecer os floats e usar Flexbox em tudo. YEEEEAAAHHH !

![](https://cdn-images-1.medium.com/max/2000/0*3zA7E4ogd3EBNMrs.gif)

### E o CSS Grid Layout ?

Eu sei que o Grid Layout é uma especificação do CSS4… [que esta em uma folha de rascunho da W3C](http://www.w3.org/TR/2015/WD-css-grid-1-20150917/)… bla… bla… bla. Mas com notícia da Microsoft finalizando o suporte das versões antigas do IE as possibilidades de começar a trabalhar com ele aumentaram.

Antes de começar de fato, para poder renderizar corretamente as propriedades do CSS Layout Grid, vamos ter que baixar o IE de acordo ao [Can I Use](http://caniuse.com/#feat=css-grid), somente os IEs tem surpote 😳, isso porque a especificação foi feita pela Microsoft. Eu utilizo o Firefox Developer Edition e consegui rendererizar razoavelmente bem, um pequeno bug que aparece mais é tranquilo. E para os chromeiros… com versão Canary podem digitar isto na url chrome://flags e habilitar esta opção

![](https://cdn-images-1.medium.com/max/2000/0*Y18Pr66RimYR6l29.)

### Gírias do CSS Grid Layout

    **Grid container**
     É o elemento de contêiner em que a malha ou grade é estabelecida.

    **Grid Items**
     Os elementos filhos da grade.

    **Grid lines **
     São os separadores horizontais e verticais, usados para criar “grid tracks”, “grid cells” y “grid areas”. Por padrão e para identificar os grid lines tem um índice numérico e opcionalmente pode ser dado nomes específicos.

    **Grid track**
     O espaço entre duas linhas paralelas. As linhas são úteis para indicar onde o conteúdo começa e termina e onde as faixas estão hospedadas.

    **Grid cell**
     O espaço definido por duas linhas horizontais e duas verticais.

    **Grid area**
     É uma forma rectangular, que cobre um número arbitrário de células adjacentes. As áreas assim como as linhas também podem receber nome.

![](https://cdn-images-1.medium.com/max/2000/0*NLnOR4v4by2O1qly.)

### Criando com CSS Grid Layout

Antes de tudo vamos criar nosso html.

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Experimento CSS Grid Layout</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="wrap">
        <header class="header">
          <h2>Este é o Header</h2>
        </header>

        <main class="main">
          <h2>Main</h2>
          <h4>Aqui vai nosso conteudo principal do site</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni sit nisi alias tenetur, ullam laborum amet, ipsa sequi, aliquid quaerat tempora suscipit optio quisquam rem a accusantium dignissimos pariatur itaque, molestias aperiam minus eos! Aliquam praesentium iusto, quisquam quo, laborum vitae quaerat quia qui sapiente minima, nisi eaque magni accusamus molestias harum distinctio aspernatur officiis quibusdam aliquid quasi cum doloribus repudiandae exercitationem. Harum, omnis, tenetur eius, velit error cum iure facere dolorum, maxime vero dignissimos ipsa similique atque vitae neque iusto dolor! Porro reiciendis nesciunt magni beatae reprehenderit earum nulla, consectetur rerum vero laborum eveniet expedita similique quo, exercitationem delectus corporis! Eaque voluptatum architecto doloremque dolore iusto commodi! Harum sapiente, minus nam totam quam assumenda? Dolor non est reprehenderit quidem officia odit laborum omnis quaerat hic similique atque, autem nobis ex amet adipisci illo repellat consequatur. Sint aspernatur autem dolor consequatur eligendi veniam quos tempore, ipsam maiores ipsa eum sapiente perspiciatis molestiae consequuntur officia nostrum quod voluptas! Facilis aspernatur itaque ea, eveniet blanditiis libero dolore et temporibus architecto, vel consectetur cum fuga eum aperiam ut animi nam repellat distinctio, iste earum quibusdam doloremque quidem! Delectus quia, nulla tenetur impedit nostrum! Tempora repellendus ullam facilis consequuntur officia quas fugiat iusto ratione eaque ex aliquam, sunt nemo veritatis culpa explicabo quidem repellat labore soluta ad, omnis debitis magnam tenetur. Consequuntur, perspiciatis, sint. Aliquid unde ea, earum architecto, quos cumque cupiditate, deserunt sunt amet officiis itaque fuga. Veniam obcaecati officiis minus aspernatur, libero quod aperiam deserunt, sint assumenda alias, perferendis nemo similique, expedita dolorum ut ducimus voluptatum rem distinctio. Ab enim quasi molestiae, dolores aperiam unde tempora esse hic iusto labore blanditiis inventore beatae quod itaque quos! Vero autem laboriosam harum sit illum debitis doloribus laborum incidunt tempore officia sunt excepturi officiis, distinctio voluptate minus quas laudantium blanditiis maxime nisi ullam explicabo, tenetur.</p>
        </main>

        <aside class="sidebar">
          <h2>Menu</h2>
          <nav>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 4</a>
          </nav>
        </aside>

        <footer class="footer">
          <h2>Footer</h2>
        </footer>
    </div>
</body>
</html>
```

e nosso css

```
/* Reset */

*, *:before, *:after{
 box-sizing: border-box;
}
body {  
  margin: 0 auto;
  background-color: #f4f4f4;
}
nav a {
 display: block;
 margin-bottom: .5em;
}


/* Estilizando as areas */

.header { background-color: #0D47A1; padding: 1.2em;}
.footer { background-color: #2196F3; padding: 1.2em;}
.sidebar { background-color: #ccc; padding: 1.2em;}
.main { background-color: #fff; padding: 1.2em;}


/* Utilizando CSS Grid Layout */

.wrap {
 /*
 *
 * Definimos nosso wrap para receber o grid;
 */
 display: grid;


 /* 
 *
 * Será criado um grid de 2x3
 * 2 colunas: 1º de 200px e a 2º ocupando o restante do espaço
 */
 grid-template-columns: 200px 1fr;


 /* 
 *
 * 3 filas altura automatica
 */
 grid-template-rows: auto auto auto;
}

.header,
.footer {
 grid-column-start: 1;
 grid-column-end: 3;
}

.header {
  grid-row: 1;
  margin-bottom: 2em;
}

.footer {
  grid-row: 3;
  margin-top: 2em;
}

.sidebar {
  grid-column: 1;
  grid-row: 2;
  margin-right: 2em;
}

.main {
  grid-column: 2;
  grid-row: 2;
}
```

Obs. Não importa a ordem em que criamos nosso HTML, podemos declarar primeiro o footer e por ultimo o header que no css através das propriedades do CSS Grid Layout podemos reorganizar na posição desejada. É obvio e recomendado escrever o código HTML na ordem semântica.

Para começar no CSS vamos primeiro estilizar os elementos

    .header { background-color: #0D47A1; padding: 1.2em;}

    .footer { background-color: #2196F3; padding: 1.2em;}

    .sidebar { background-color: #ccc; padding: 1.2em;}

    .main { background-color: #fff; padding: 1.2em;}

Agora que esta tudo organizado, vamos criar nosso grid container de 2 colunas e 3 filas.

    /*
    *
    * Definimos nosso wrap para receber o grid;
    */
    display: grid;

    /* 
    *
    * Será criado um grid de 2x3
    * 2 colunas: 1º de 200px e a 2º ocupando o restante do espaço
    */
    grid-template-columns: 200px 1fr;

    /* 
    *
    * 3 filas altura automatica
    */
    grid-template-rows: auto auto auto;

Nosso Header e Footer vão ocupar 100% da tela para isso declaramos o seguinte:

    .header,
    .footer {
     grid-column-start: 1;
     grid-column-end: 3;
    }

Agora precisamos indicar que o Header vai ficar na primeira fila e o Footer na ultima (3º)

    .header {
     grid-row: 1;
    }

    .footer {
     grid-row: 3;
    }

Header e Footer organizados vamos agora para nossa sidebar, iremos dizer que vai estar na primeira coluna e na segunda fila

    .sidebar {
     grid-column: 1;
     grid-row: 2;
    }

E por ultimo indicamos que nosso main vai estar ao lado da sidebar, assim:

    .main {
     grid-column: 2;
     grid-row: 2;
    }

O resultado é este aqui

![](https://cdn-images-1.medium.com/max/2000/0*NHb-wzLQUjUz5N0w.)

[Você também pode fazer o download do código](https://github.com/mikejavier/css-grid-layout)

Para mim entender o CSS Grid layout é mais fácil do que Flexbox, infelizmente como qualquer especificação temos que esperar o suporte dos browsers.
 Pesquisando na internet alguma lib ou polyfill mais não encontrei nada. Se alguém souber me avisa!

Fontes:

[https://escss.blogspot.com/2015/12/guia-css-grid-layout.html](https://escss.blogspot.com/2015/12/guia-css-grid-layout.html)

[https://carlosazaustre.es/blog/css-grid-layout-css/](https://carlosazaustre.es/blog/css-grid-layout-css/)
