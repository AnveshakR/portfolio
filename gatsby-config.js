module.exports = {
  siteMetadata: {
  
    siteUrl: `https://anveshakr.com/`,
  
    name: 'Anveshak Rathore',
    
    title: `Anveshak Rathore | AI/ML Engineer`,
    
    description: `AI/ML Engineer based out of Chicago, building impactful end-to-end AI solutions.`,
    
    author: `anveshakr.com`,
    
    github: `https://github.com/anveshakr`,
    
    linkedin: `https://linkedin.com/in/anveshak-rathore`,
    
    about: `I'm an AI engineer with a strong foundation in research and hands-on industry experience, specializing in the development and deployment of innovative AI applications and products. Outside of work, I am passionate about creating impactful projects that streamline processes and enhance efficiency, allowing individuals and teams to focus on high-level goals while reducing time spent on repetitive tasks.`,
    
    projects: [
      {
        name: 'Home Assistant AI',
        description:
          'Custom home automation assistant using LangChain toolchains with STT and TTT.',
        link: 'https://github.com/AnveshakR/homeassistant-AI',
      },
      {
        name: 'Breast Cancer Prediction from Mammograms',
        description:
          'Detecting cancer tumors in mammogram DICOM images using autoencoders, mitigating negative class bias.',
        link: 'https://github.com/AnveshakR/Breast-Cancer-Prediction',
      },
      {
        name: 'Spotify Poster Generator',
        description:
          'Generate custom Spotify album posters with a color bar derived from the album art colors.',
        link: 'https://github.com/AnveshakR/poster-generator',
      },
    ],
    // `name` and `description` mandatory. `link` is optional.
    experience: [
      {
        name: 'iManage',
        description: 'Machine Learning Engineer | Jan 2025 - Present\n\
                      Data Scientist | Oct 2024 - Jan 2025\n\
                      Data Science Intern | May 2023 - Aug 2023',
        link: 'https://www.linkedin.com/company/4526/',
      },
      {
        name: 'University of Massachusetts, Lowell',
        description: 'Research Assistant | Jan 2024 - May 2024\n\
                      Graduate Teaching Assistant | Aug 2023 - Dec 2023\n\
                      Graduate Teaching Assistant | Jan 2023 - May 2023',
        link: 'https://www.linkedin.com/company/9916/',
      },
      {
        name: 'Veermata Jijabai Technological Institute',
        description: 'AI Intern at CoE-CNDS | Jun 2021 - Sep 2021',
        link: 'https://www.linkedin.com/school/veermata-jijabai-technological-institute/',
      },
    ],
    education: [
      {
        name: 'University of Massachusetts, Lowell',
        description: "Master of Science (MS) - Computer Science\n\
                      2022 - 2024\n\
                      3.6 CGPA",
        link: 'https://www.linkedin.com/school/university-of-massachusetts-lowell/'
      },
      {
        name: 'Veermata Jijabai Technological Institute, Mumbai',
        description: "Bachelor of Technology (B.Tech) - Electronics Engineering\n\
                      2018 - 2022",
        link: 'https://www.linkedin.com/school/veermata-jijabai-technological-institute/',
      }
    ],
    // `name` and `description` mandatory
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, C, C++, Java, Arduino, SQL, Bash, PowerShell, Rust',
      },
      {
        name: 'Applications',
        description: 'PyTorch, Machine Learning, LLM fine tuning, LangChain',
      },
      {
        name: 'Other',
        description:
          'Docker, MS Azure Suite, Power BI, Agile/Scrum, Google Cloud Platform',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#1f3333`,
        theme_color: `#38040e`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
