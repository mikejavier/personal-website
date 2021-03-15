export default {
  contactMe: 'contact me!',
  welcome: 'welcome',
  about: 'about',
  contact: 'contact',
  read: 'read',
  english: 'english',
  portuguese: 'portuguese',
  spanish: 'spanish',
  profession: 'Web Developer',
  updated: 'updated',
  readMore: 'Read more',
  findAnArticle: 'find an article',
  aboutPage: {
    intro: {
      firstText:
        'My name is Michael Santillán, born in Ecuador, I am {age} years old and currently live in Brazil. I work with web development which allows me to help companies and entrepreneurs to bring their ideas to life.',
      secondText: 'If you have a project and would like to work with me, {mail}'
    },
    skills: {
      title: 'Skills',
      firstText:
        'I have knowledge of front-end and back-end. Currently this is the stack I use the most',
      secondText: 'Besides that....',
      item1: 'Responsive web design',
      item2:
        'CSS Frameworks (Bulma, Bootstrap) and preprocessors (Sass, Stylus)',
      item3: 'Front-end Frameworks (Vue, React, Angular)',
      item4: 'Back-end Frameworks (Express, Adonis, Nest)',
      item5: 'Database (Postgres, Mysql, Mongo)',
      item6: 'Development with tests (unit, e2e)',
      item7: 'Integration with APIs',
      item8: 'WordPress Development',
      item9: 'CD/CI, Docker, AWS',
      thirdText: 'Not on the list? We learn!'
    },
    works: {
      title: 'Work experience',
      job1: {
        title: 'Back-end developer - {vizir} (2019 - Present)',
        description:
          'Understanding the problem and solving it regardless of the technology used is a challenge and at the same time a daily learning that I have been having as a back-end developer at vizir.'
      },
      job2: {
        title: 'Front-end developer - {leet} (2017 - 2018)',
        description:
          "I was part of the front-end development team for the company's main product, {postgrain}. Instagram account management application for agencies and freelancers."
      },
      job3: {
        title: 'Web developer - Several agencies in Recife - PE (2013 - 2017)',
        description:
          'For 4 years I worked for several agencies in Recife, the jobs were usually website development or e-commerce often using WordPress.'
      },
      aboutMore:
        'More details of my professional career can be found on my {linkedin}.'
    },
    projects: {
      title: 'Projects',
      description:
        'In my free time I spend working on my own projects or contributing to some projects on {github}. The most recent were {repositories}'
    }
  },
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
    }
  },
  articlesNotFound: "I can't find the articles to show :(",
  footerMessage: 'Made with {vue}, {nuxt}, {bulma} and {heart}',
  notFoundPage: {
    message: "Hey, look who's lost..."
  }
}
