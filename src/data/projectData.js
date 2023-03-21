import speedrunPortfolioImg from '../images/project-previews/speedrun-portfolio.jpg';
import shrubHubImg from '../images/project-previews/shrub-hub.jpg';

const projectData = [
  {
    id: 0,
    title: 'Speedrun Portfolio',
    description: 'This is a full-stack MERN application that showcases various statistics for the speedruns I have performed over the years. The database is populated by formatting data the Speedrun.com API provides and is queried on the front-end with GraphQL.',
    app: 'https://speedrun-portfolio.herokuapp.com/',
    repo: 'https://github.com/ottobisno/speedrun-portfolio',
    img: speedrunPortfolioImg
  },
  {
    id: 1,
    title: 'Shrub Hub',
    description: 'This is a full-stack web application that allows users to upload and discuss their collections of house plants. This is an Express.js app that uses a templating engine to render the front-end. The database was created using MySQL and is queried with RESTful API routes.',
    app: 'https://shrub-hub-deployed.herokuapp.com/',
    repo: 'https://github.com/ottobisno/shrub-hub',
    img: shrubHubImg
  }
];

export default projectData;
