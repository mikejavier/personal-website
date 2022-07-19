---
title: Preciso realmente me preocupar com a minha privacidade online?
category: privacy
language: pt
tags:
- privacy
- open-source
  summary: Não é porque você não tem nada a esconder que não deveria levar sua privacidade online a sério.  A não ser que você também não se importe com sua segurança e sua vida financeira.
  createdAt: 2022-07-18
  updatedAt: 2022-07-18
---

A privacidade é um direito humano fundamental e assim como os outros direitos, temos a obrigação de proteger. No mundo digital a privacidade online é o direito de escolha que nós usuários temos de compartilhar ou não os nossos dados.

Após o [escandalo do Facebook e da Cambridge Analytica,](https://en.wikipedia.org/wiki/Facebook%E2%80%93Cambridge_Analytica_data_scandal) o tema privacidade online tornou-se uma questão de interesse geral, não é a toa que [leis rigorosas](https://gdpr.eu/what-is-gdpr/) estão sendo criadas e implementandas em todos os países à medida que as formas de comunicação continuam aumentando, possibilitando a interceptação de dados por terceiro quando um conteúdo é enviado, recebido ou divulgado.

Antes de começar o assunto é bom deixar claro que privacidade é diferente do anonimato. Para exemplificar essa diferença de maneira direta deixe-me dar um exemplo. Todos sabemos o que acontece no banho, mas mesmo assim fecha-se a porta. Isso é porque se quer privacidade, mas as pessoas da sua casa sabem que é você quem está lá. Quando falamos em anonimato, geralmente se desconhece o indivíduo por trás da ação independente dela ser privada ou não.

> "Arguing that you don’t care about the right to privacy because you have nothing to hide is no different than saying you don’t care about free speech because you have nothing to say."
>
>   Edward Snowden

Não é porque você não tem nada a esconder que não deveria levar sua privacidade online a sério.  A não ser que você também não se importe com sua segurança e sua vida financeira.

## Por que eu deveria me importar?

Sabia que às vezes o preço de algum serviço/produto na internet (como por exemplo um pacote de viagem ou um celular) pode variar para mais ou menos dependendo do tipo de aparelho que está utilizando? Por exemplo, se estiver usando a última versão do iPhone, é provável que você veja anúncios com preços mais elevados.

![Imagem mostrando segmentação do google ads por renda](https://i.imgur.com/3DnbQVT.jpg)

Além disso, os nossos dados pessoais também valem dinheiro para os criminosos. Listas de cartões de crédito, e-mails e até dados pessoais (obrigado serasa) são vendidos abertamente na darknet. Pense muito bem antes de colocar qualquer informação sua na web já que pode ser usada de forma maliciosa.

Embora muitas destas empresas para as quais fornecemos nossos dados afirmam que o tratamento de dados pessoais é confidencial, não há forma de o saber e muito menos temos a garantia que [em caso de vazamento os dados estejam criptografados](https://www.tecmundo.com.br/seguranca/138705-dados-1-4-milhao-clientes-banco-inter-expostos-acesso.htm#:~:text=de%20desconto%20Amazon-,Dados%20de%201%2C4%20milh%C3%A3o%20de%20clientes%20do,Inter%20estavam%20expostos%20para%20acesso&text=O%20vazamento%20de%20dados%20do,de%20mais%20de%20um%20ano.). E aqui não to nem entrando no mérito das empresas vendem a terceiros essas informações.

Manipulações semelhantes baseadas nos seus padrões de navegação, hábitos de visualização de páginas e muitas outras coisas são usadas para determinar que conteúdo lhe é mostrado em sites de redes sociais e feeds de notícias. Assim, em vez de obter todos os lados de uma história, será mostrado apenas os "fatos" que estão em conformidade com as suas atitudes e/ou pensamentos.

## Como os dados são obtidos?

Não fornecer nossos dados e deixar de ter aquele conforto de ter comida na porta de casa, entretenimento via streaming ou comprar aquele produtos diferentes da china está de longe ser a melhor solução já que todos nós quando navegamos na web deixamos algumas "pegadas digitais" ou pequenos vestígios dessas ações que realizamos.

Acesse o site [deviceinfo.me](https://www.deviceinfo.me/) e olhe a quantidade de informações que disponibilizamos sem se quer apertar um botão do teclado.

![Imagem mostrando dados coletados pelo browser](https://i.imgur.com/lZ17tbJ.png)

Outra maneira de coletar informações (utilizado por empresas de segurança/cibersegurança e agências de inteligência governamentais como FBI e NSA) é por meio do Open-source intelligence (OSINT) que nada mais é do que a coleta, análise e processamento de informações passivamente a partir de recursos abertos ou disponíveis publicamente, exemplo:

Internet: sites de busca, redes sociais, blogs, wikis, fóruns e até mesmo na Deep Web.
Mídia: jornais, televisão, revistas e rádio.
Informações públicas de fontes governamentais.
Eventos, conferências, trabalhos e até bibliotecas.

Algumas ferramentas e métodos usado no OSINT são:

- Google Hacking / Google Dorks
  É um método para buscar e coletar informações, você pode conhecer mais nesse nosso artigo: Usando Google Hacking para testes de invasão

- OSINT Framework
  Disponível em https://osintframework.com/ é um “mapa mental” que pode ajudar encontrar fontes para buscar informações.

- Maltego
  Uma ferramenta de coleta que pode ser encontrada já nos sistemas operacionais de Pentest, como Kali Linux e Parrot Security.

- Shodan
  Um buscador já muito utilizado por hackers por ter o poder de mostrar serviços como SSH, FTP, SNMP, Telnet, RTSP, IMAP também realizar capturas de banner.

- Metagoofil
  Ferramenta para extração de metadados de arquivos como: pdf, doc, ppt, xls e entre outros.

E desta maneira, podemos mapear tudo de você quando está compartilhando sua geolocalização ao usar o Waze, fazendo compras onlines onde acaba compartilhando praticamente todas as informações pessoais e financeiras e claro.... fotos, vídeos e áudios nas redes sociais ou aplicativos de mensageria.

## Dicas para se proteger

Até agora só trouxe problemas em cima de problemas, eu sei, mas queria enfatizar o quão difícil é manter os seus dados seguros quando estamos usando dispositivos conectados na internet. Para conseguir esse propósito temos que entender que se trata mais de uma mudança de comportamento/hábitos quando navegando na internet do que simplesmente trocar o Whatsapp pelo Signal.

Para começar, gostaria de começar pelas coisas essenciais de segurança e que você deve estar careca de saber que são:

- Manter os seus dispositivos sempre atualizados! Não ignore ou demore para instalar correções de segurança e/ou atualizações de aplicativos e sistemas operacionais.
- Para as pessoas que usam Windows, usem um bom programa de proteção contra vírus. Pesquise (não no google, comento daqui a pouco onde) por "programas antivírus com a melhor classificação" ou "melhores antivirus de [ano atual]".
- Use um gerenciador de senhas (eu uso o [bitwarden](https://bitwarden.com/)), não armazene suas senhas em bloco de notas no celular, computador ou no navegador. Além disso, não reutilize a mesma senha para tudo, crie uma para cada serviço.
- Ative autenticação de fatores (2FA), em [2fa.directory](https://2fa.directory/br/) você consegue ver se o serviço que você usa tem suporte a 2FA e que tipo de suporte, **fuja de 2FA por SMS**.
- Não clique em qualquer link que receber por SMS, email, redes sociais ou qualquer outro meio.
- Não instale qualquer aplicativo, programa ou plugin de navegador. Quanto menos coisas você tiver instalada melhor será sua segurança e privacidade. Remova aqueles que você não usa também, seja minimalista!

Vamos agora para o nível básico de privacidade:

- Use uma boa Virtual Private Network (VPN). Isto protege sua localização real na Internet (mascarando seu endereço de IP) dos sites e outros recursos da Internet que você utiliza. Também protege suas atividades do seu provedor de serviços de Internet (ISP) porque as conexões entre seus dispositivos e a empresa VPN são criptografadas (acredite, alguns ISPs vendem seu histórico de navegação). **IMPORTANTE!** Evite serviços de VPN desconhecidos ou gratuitos, o desempenho é péssimo e eles também podem vender suas informações.
- Use um navegador que se preocupa com sua privacidade. O Google Chrome (e todos os outros serviços do Google) é construído para extrair dados sobre você. Em vez disso, use navegadores alternativos como FireFox, Bromite ou Brave (sim, alguns torcem o nariz, porém é uma ferramenta pronta para pessoas menos técnicas).
- Use um mecanismo de busca que não rastreia você, como Startpage (traz os mesmos resultados que o google), DuckDuckGo ou Brave Search. Existem outros buscadores cada uma com suas peculiaridades, encorajo a pesquisar sobre.
- Comunique-se com segurança, ou seja, use sempre que puder criptografia de ponta a ponta (E2EE). Neste ponto teremos uma barreira um pouco maior de adoção pelo fato que não depende só de nós, precisamos que as outras pessoas também utilizem os mesmo serviços e infelizmente a grande maioria (principalmente seus familiares e amigos) usam os aplicativos mainstream como WhatsApp/Telegram, Gmail, Slack, Zoom, etc. Faça sua parte no que puder, seja instalando um servidor XMPP, seja enviando e recebendo emails criptografados, gosto de pensar que algum dia vamos ter uma comunicação realmente privada.
- Desligue todas as funções que emitem sinal (NFC, WiFi, Bluetooth, GPS, etc) quando não estiver usando.
- Ainda referente ao ponto anterior, não permita o uso dessas funcionalidades por aplicativos que não precisam. Exemplo, se você instala um aplicativo de lanterna, porque será que ele solicita acesso a seus contatos ou a sua localização? Com certeza está atrás dos seus dados, então fique esperto.
- Prefira utilizar programa/aplicativos open-source (FOSS/FLOSS), em vez dos aplicativos caixa preta das grandes big techs. Neste outro site [privacyguides.org](https://www.privacyguides.org/tools/) você pode encontrar uma lista de ferramentas que substituem aquelas que são famosas e rastreiam seus dados. A lista vai desde browsers até sistemas operacionais.
- Não use os aplicativos oficiais das redes sociais. Como já foi comentado, tudo que fazemos é rastreado e não é diferente quando usamos os apps oficiais das mainstream, prefira consumir conteudo via RSS ou então usar clientes alternativos como por exemplo: [Infinity](https://github.com/Docile-Alligator/Infinity-For-Reddit) para o Reddit, [Nitter](https://github.com/zedeus/nitter/wiki/Instances) para o Twitter, [NewPipe](https://newpipe.net/) ou [Invidious](https://github.com/iv-org/invidious) para o Youtube. [Aqui você pode conferir outros aplicativos para outras redes](https://github.com/pluja/awesome-privacy#social-networks-and-platforms)
- Remova os metadados dos seus arquivos (há pessoas que nem sabem da existências deste tipo de informação). Metadados são informações simples presente em todo e qualquer arquivo presente digital (foto, pdf, word, etc), ou seja, ao criar um novo documento de texto por exemplo, será possível saber vários detalhes através dos metadados, como quem o criou, onde, quando e por aí vai. Em imagens, essas informações podem conter o equipamento usado e, em alguns casos, até mesmo a localização exata daquele registro. [Mat2](https://0xacab.org/jvoisin/mat2) é um cli que ajuda a remover esse tipo de informação.

Privacidade é um assunto complexo, e proteger a sua no mundo digital é mais uma mudança de comportamento e hábitos do que troca de programas. Mas seguindo algumas das recomendações que listei acima você já vai estar fora do radar de muitos trackers. Pretendo continuar trazendo mais posts sobre o assunto e enquanto isso eu  encorajo você a continuar pesquisando e quem sabe tomar medidas mais radicais como deletar todas suas redes sociais, usar sistemas operacionais mais privativos e até só usar dinheiro como forma de pagamento.














