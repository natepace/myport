import Mock from "../mock";

const database = {
  information: {
    name: 'Nate Pace',
    aboutContent: "I am a frontend web developer. I can provide clean code and pixel perfect design.",
    age: 25,
    phone: '',
    nationality: 'American',
    language: 'English, Spanish',
    email: 'n8wpace@gmail.com',
    address: 'New York, open to relocate',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/nate-pace-009733168/',
      dribbble: '',
      github: 'https://github.com/natepace'
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/empty.pdf'
  },
  services: [
    {
      title: "Web Design",
      icon: 'color-pallet',
      details: "Experienced in graphic design and ux/ui design."
    },
    {
      title: "Front End Development",
      icon: 'code',
      details: "Able to provide sophisticated web applications using ReactJS or other Javascript frameworks/libraries."
    },
    {
      title: "Back End Development",
      icon: 'mobile',
      details: "Proficient in making secure backends/APIs using NodeJS, express, and knexJS."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company'
      }
    },
    {
      id: 2,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: 'Susan Yost',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client'
      }
    }
  ],
  skills: [
    {
      title: "HTML5",
      value: 95
    },
    {
      title: "CSS3",
      value: 95
    },
    {
      title: "Javascript",
      value: 95
    },
    {
      title: "NodeJS",
      value: 85
    },
    {
      title: "ReactJS",
      value: 95
    },
    {
      title: "Python",
      value: 95
    },
    {
      title: "PostgreSQL",
      value: 90
    },
    {
      title: "Redux",
      value: 90
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "Chess Friends",
      subtitle: "Uses Chess.Com's API to allow friends to see head to head results.",
      imageUrl: "/images/chess-app-pic.png",
      largeImageUrl: ["/images/chess-app-pic.png"],
      url: 'https://chess-new-project.vercel.app/versus'
    },
    {
      id: 2,
      title: "Pace Law Utah",
      subtitle: "Full stack website of law firm in Salt Lake City.",
      imageUrl: "/images/pace-law-pic.png",
      largeImageUrl: [
        "/images/pace-law-pic.png"

      ],
      url: 'https://pacelawutah.com'
    },
    {
      id: 3,
      title: "Asylum Seekers | Human Rights",
      subtitle: "Massive project, collaborative effort. llama001@maildrop.cc, Test001Test, for login.",
      imageUrl: "/images/asylum-app-pic.png",
      largeImageUrl: [
        "/images/asylum-app-pic.png"
      ],
      url: 'https://a.humanrightsfirstasylum.dev/login'
    },
    {
      id: 4,
      title: "Anywhere Fitness Gym",
      subtitle: "Full stack gym website for employees and customers. testuser, testuser, for login.",
      imageUrl: "/images/fitness-app-pic.png",
      largeImageUrl: ["/images/fitness-app-pic.png"],
      url: 'https://anywhere-fitness-rho.vercel.app/'
    }

  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2020 - Present",
        position: "Freelance Web Developer",
        company: "Pace Law Firm, Alejandro's Amazon Expeditions",
        details: "Used ReactJS to to build business websites for a law firm in Salt Lake City and a tour company in Leticia, Colombia."
      },
      {
        id: 2,
        year: "2017 - 2020",
        position: "Editor, Graphic Designer, Web Developer",
        company: "Tobuscus, YNYT LLC, No BS",
        details: "Video production and graphic design for youtubers totalling 17 million subscribers and over 4 billion views. Expert in Photoshop and the whole adobe suite including Premiere. Worked on websites using HTML5 as well."
      },

    ],
    educationExperience: [
      {
        id: 1,
        year: "2020-2021",
        graduation: "Full Stack Web Development Certificate",
        university: "Lambda School",
        details: "6 months and over 1200 hours of coding in a simulated web development work environment."
      },
      {
        id: 2,
        year: "2017 - 2020",
        graduation: "Progress towards degrees in Computer Science, Physics",
        university: "Brigham Young University",
        details: "After a year of physics I switched into computer science for 2 years. When covid hit I decided to do a coding bootcamp to jumpstart my career, although I plan on finishing a degree."
      }

    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ['+1-585-331-7615'],
    emailAddress: ['n8wpace@gmail.com'],
    address: "New York, open to relocation"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});