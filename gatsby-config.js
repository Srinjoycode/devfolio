module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Srinjoy Bhuia',
    // Main Site Title
    title: `Srinjoy | AI Developer`,
    // Description that goes under your name in main bio
    description: `Machine Learning engineer based in Kolkata, India`,
    // Optional: Twitter account handle
    author: `@BhuiyaSrinjoy`,
    // Optional: Github account URL
    github: `https://github.com/Srinjoycode`,
    // Optional: LinkedIn account URL
    linkedin: `https://linkedin.com/in/srinjoy-bhuiya`,
    // Content of the About Me section
    about: `I'm a enthusiastic Machine Learning engineer who has experience building , scaling and deploying state of the art Machine Learning and Deep Learning models in various domains. I'm also passionate about open-source contributions, with contributions in many high impact projects.I am currently building a startup which specialises in the domain of autonomous driving`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name:
          'Implentation of a Driving lane detector Using a Autoencoder style model',
        description:
          'A deep learning model which is used to infer the drivable area in an image ',
        link:
          'https://github.com/Srinjoycode/UNET_pytorch_on_cityscapes_dataset',
      },
      {
        name: 'Retinal Vessel identification',
        description:
          'A research project to present a new model for retinal vessel detection in medical images',
        link: 'https://github.com/Srinjoycode/Retina_Blood_Vessel_Segmentation',
      },
      {
        name: 'A full-stack TODO app',
        description: 'Created using Flask and SQLite',
        link: ' https://todo-app-flask-srinjoy.herokuapp.com/',
      },
      {
        name: 'A corona-virus data-visualization project',
        description:
          'A Data analysis Case Study amidst the pandemic to show a correlation between urbanization and hospital bed availability ',
        link: 'https://coronavirus-indian-data-app.herokuapp.com/',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'HEVA',
        description: 'Machine Learning Enginner, April,2021-Present',
        link: 'https://www.unschool.in/',
      },
      {
        name: 'Unschool',
        description: 'Sales and Marketing Intern',
        link: 'https://www.unschool.in/',
      },
      {
        name: 'Bachlors of technology, Computeer Science engineering 2019-23',
        description: 'YGPA-9.23',
        link: 'https://www.heritageit.edu/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Tensorflow, Pytorch, Flask, JavaScript (ES6+), Node.js, Express.js, React, Python, C, Java, Numpy, Pandas, Seaborn, Scikit-learn',
      },
      {
        name: 'Databases',
        description: 'MongoDB, SQLite, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Azure ,Google Cloud Platform, CI / CD, Kubeernetes , API design, git ',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
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
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
