const aboutPage = {
  tooLongDontReadBlock: {
    title: 'TL;DR',
    firstParagraph:
      'My name is Michael Santillán, born in Ecuador, I am {age} years old and currently living in Brazil. I work with web development which allows me to create anything that works on the WWW. I am an open source software and online privacy enthusiast, and in my spare time I like to play sports and spend time with my family.',
    secondParagraph:
      'You can contact me {mail} or using some of the means below',
    thirdParagraph: 'and find me on some platforms',
    linkedinAlert: 'Little use! Only for visibility in professional life',
    instagramAlert: 'Little use! Only for following friends and family',
    alertMessage:
      'Attention, if you find me in any other platform that is not in the list it is because I do not use it anymore and forgot to delete it or it is not me.'
  },
  aboutMeBlock: {
    title: 'Who I am',
    firstParagraph:
      'My name is Michael Santillán, born in Ecuador, I am {age} years old and currently live in Brazil. I am a software engineer focused on web technologies, i.e. I work making applications, websites or anything else that works on the World Wide Web, also known as "www".',
    secondParagraph:
      'Which is very gratifying since everything today is on the internet, isn\'t it? And speaking of the Internet... I got all my knowledge about technology and programming from the Internet. Since I did not attend any college and have no "training" in the area. ',
    thirdParagraph:
      "So my profession is a way to give back to the internet all the achievements I have obtained through it, that's why I am ENTHUSIAST about open source software and online privacy. Two important pillars that in my opinion avoid the centralization of knowledge and manipulation of information which is exactly the opposite of the purpose of the web."
  },
  skillsBlock: {
    title: 'Skills',
    firstParagraph:
      'I have knowledge of front-end and back-end. Currently this is the stack I use the most',
    secondParagraph: 'Besides that....',
    item1: 'Responsive web design',
    item2: 'CSS Frameworks (Bulma, Bootstrap) and preprocessors (Sass, Stylus)',
    item3: 'Front-end Frameworks (Vue, React, Angular)',
    item4: 'Back-end Frameworks (Express, Adonis, Nest)',
    item5: 'Database (Postgres, Mysql, Mongo)',
    item6: 'Development with tests (unit, e2e)',
    item7: 'Integration with APIs',
    item8: 'WordPress Development',
    item9: 'CD/CI, Docker, AWS',
    thirdParagraph: 'Not on the list? We learn!'
  },
  worksBlock: {
    title: 'Work experience',
    job1: {
      title: 'Software Engineer - {questrade} (2022 - Present)',
      description:
        'My goal now is to create digital products with the purpose of giving Canadians better, simpler, and more affordable ways to become financially successful and secure.'
    },
    job2: {
      title: 'Back-end developer - {vizir} (2019 - 2022)',
      description:
        'Understanding the problem and solving it regardless of the technology used is a challenge and at the same time a daily learning that I have been having as a back-end developer at vizir.'
    },
    job3: {
      title: 'Front-end developer - {leet} (2017 - 2018)',
      description:
        "I was part of the front-end development team for the company's main product, {postgrain}. Instagram account management application for agencies and freelancers."
    },
    job4: {
      title: 'Web developer - Several agencies in Recife - PE (2013 - 2017)',
      description:
        'For 4 years I worked for several agencies in Recife, the jobs were usually website development or e-commerce often using WordPress.'
    },
    lastParagraph:
      'More details of my professional career can be found on my {linkedin}.'
  },
  hobbiesBlock: {
    title: 'Hobbies',
    firstParagraph:
      'As a child I was very stimulated (thanks mom and dad) with physical and intellectual activities that I carry until today, for example play soccer. Since 2015 (with the same group of players) every Saturday night I have time set aside to relax by playing soccer.',
    secondParagraph:
      'Cycling was an activity that I discovered shortly before the pandemic when I bought my bike initially to get around my neighborhood (to go to the soccer game, to the market, etc.) and little by little I began to enjoy it. During the pandemic, cycling became my main activity, riding for longer and longer distances.',
    thirdParagraph:
      'One of the most remarkable moments I have in my life as a child is when my father taught me for the first time to play chess, I think I was about 6 years old or less. I loved the movement of the pieces and the "shepherd\'s mate" strategy that I always wanted to do to my school friends during chess class. After that this activity was left aside in my life until I discovered Lichess (you can add me there) and how I could give the "shepherd\'s mate" only this time to another person on the other side of the world, of course it didn\'t work out and since then I have been watching and studying new moves to improve them.',
    fourthParagraph:
      "When I arrived in Brazil I discovered that Brazilians have other passions besides soccer and auto racing is one of them. I just didn't know what fun it was to watch 20 cars racing for an hour, until one day in 2018 I was unwittingly waiting for a TV program that would only start at the end of the Formula 1 race. I don't remember what exactly the race was, my only memory was seeing a dispute between a gray car (Mercedes) and two Ferrari cars vying for position at high speed on an S-shaped curve (search the internet for Hamilton and Vettel monza 2018). Since then I have not missed any Formula 1 GP.",
    fifthParagraph:
      'These are the main activities present in my life in the last 4 years besides reading, writing and watching movies/series.'
  },
  purposesBlock: {
    title: 'Purposes',
    firstParagraph:
      'Apart from the purpose of helping street animals (I need to mature the idea, I welcome suggestions), the rest is aimed at disseminating knowledge. I believe very much in that cliché phrase "knowledge is power". To be able to choose, to be able to question, to be able to evaluate what really makes sense in our lives.',
    secondParagraph:
      'Having the ability to seek knowledge and put it into practice helps us to prosper in any area of our lives, as well as evolving as a human being.',
    thirdParagraph:
      'The biggest purpose I have is to always want to pass on knowledge, especially that which is technology oriented, whether writing on the internet or over coffee with co-workers'
  }
}

export default {
  here: 'here',
  welcome: 'welcome',
  aboutMe: 'About me',
  contact: 'contact',
  read: 'read',
  english: 'english',
  portuguese: 'portuguese',
  spanish: 'spanish',
  profession: 'Software Engineer',
  updated: 'updated',
  readMore: 'Read more',
  findAnArticle: 'find an article',
  profileDescription:
    'Born in Ecuador, code lover and an enthusiast for online privacy and open-source software ',
  aboutPage,
  contactPage: {
    title: "Let's build something together!",
    subtitle: 'Contact me to bring your ideas to life.',
    form: {
      nameField: {
        label: 'Name',
        placeholder: 'your name'
      },
      emailField: {
        label: 'Email',
        placeholder: 'your@email'
      },
      subjectField: {
        label: 'Subject',
        option1: 'I need help with my project',
        option2: 'Only talk with you',
        option3: 'Other'
      },
      messageField: {
        label: 'Message',
        placeholder: 'your message'
      },
      submitButton: 'Submit'
    },
    messageSuccess: 'Message sent successfully',
    messageError: 'Failed to send message'
  },
  blogPage: {
    title: 'Welcome to my blog',
    subtitle: 'here you will find content about programming and technology',
    articlesNotFound: "I can't find the articles to show :("
  },
  footerMessage: 'Made with {vue}, {nuxt}, {bulma} and {heart}',
  notFoundPage: {
    message: "Hey, look who's lost..."
  }
}
