

const projects = [
  // Template:
  // {
  //   title: '',
  //   img: '',
  //   url: '',
  //   repo: '',
  //   description: '',
  //   technologies: ['']
  // },
  // },
  {
    title: 'Full-stack Voting App - IN PROGRESS',
    img: '',
    url: '',
    repo: 'https://github.com/TimHandy/voting-app',
    description: 'React voting app with authentication, and backend using Express and MongoDB.',
    technologies: ['React', 'Express', 'MongoDB', 'Webpack', 'ES6', 'Javascript']
  },
  {
    title: 'React Game of Life - IN PROGRESS',
    img: '',
    url: '',
    repo: 'https://github.com/TimHandy/game-of-life',
    description: 'React version of Conway\'s Game of Life.',
    technologies: ['React', 'Webpack', 'ES6', 'Javascript']
  },
  {
    title: 'React Recipe Box',
    img: 'http://pix.toile-libre.org/upload/thumb/1485679458.png',
    url: 'https://timhandy.github.io/recipe-box/',
    repo: 'https://github.com/TimHandy/recipe-box',
    description: 'CRUD app to store recipes with persistence in localStorage.',
    technologies: ['React', 'Webpack', 'ES6', 'Javascript', 'React-Bootstrap']
  },
  {
    title: 'React Leaderboard',
    img: 'http://pix.toile-libre.org/upload/thumb/1485677495.png',
    url: 'https://timhandy.github.io/react-camper-leaderboard/',
    repo: 'https://github.com/TimHandy/react-camper-leaderboard',
    description: 'React Front end project: creates a dynamic table from API data. clicking headings refreshes on different API call.',
    technologies: ['React', 'Webpack', 'API', 'Axios', 'ES6', 'Javascript']
  },
  {
    title: 'React Markdown Previewer',
    img: 'http://pix.toile-libre.org/upload/thumb/1485677164.png',
    url: 'https://timhandy.github.io/react-markdown-previewer/',
    repo: 'https://github.com/TimHandy/react-markdown-previewer',
    description: 'React Front end project: live markdown editor.',
    technologies: ['React', 'Javascript', 'Webpack', 'ES6', 'Javascript']
  },
  {
    title: 'Image Search Abstraction Layer',
    img: 'http://pix.toile-libre.org/upload/thumb/1485678414.png',
    url: 'https://image-search-abst-layer.herokuapp.com/',
    repo: 'https://github.com/TimHandy/image-search-abstraction-layer',
    description: 'Returns paginated image search data in JSON format, and stores recent searches in a database.',
    technologies: ['Express', 'Node', 'MongoDB', 'Javascript']
  },
  {
    title: 'File Metadata Microservice<br/> API CHANGED - BROKEN',
    img: 'http://pix.toile-libre.org/upload/thumb/1485678414.png',
    url: 'https://file-metadata-microsrvc.herokuapp.com/',
    repo: 'https://github.com/TimHandy/file-metadata-microservice',
    description: 'Choose a file to upload and it will return the file size.',
    technologies: ['Node', 'Express', 'Javascript']
  },
  {
    title: 'Request Header Microservice',
    img: 'http://pix.toile-libre.org/upload/thumb/1485678414.png',
    url: 'https://req-header-service.herokuapp.com/',
    repo: 'https://github.com/TimHandy/request-header-parser-microservice',
    description: 'Queries the HTTP request header and sends back a JSON response containing the user\'s IP address and OS.',
    technologies: ['Node', 'Express', 'Javascript']
  },
  {
    title: 'URL Shortener Microservice',
    img: 'http://pix.toile-libre.org/upload/thumb/1485678414.png',
    url: 'https://fcc-minurl.herokuapp.com/',
    repo: 'https://github.com/TimHandy/url-shortener-microservice',
    description: 'When using the shortened URL it checks the database and forwards the request to the original URL.',
    technologies: ['Node', 'Express', 'MongoDB', 'Javascript']
  },
  {
    title: 'Timestamp Microservice',
    img: 'http://pix.toile-libre.org/upload/thumb/1485678414.png',
    url: 'https://mytimestamp-microservice.herokuapp.com/',
    repo: 'https://github.com/TimHandy/timestamp-microservice',
    description: 'Pass a string (unix timestamp or natural language) as a URL parameter and it will return json dates.',
    technologies: ['Node', 'Express', 'Javascript']
  },
  {
    title: 'Teams Chooser',
    img: '',
    url: 'https://github.com/TimHandy/football-manager',
    repo: 'https://github.com/TimHandy/football-manager',
    description: 'Selects equally matched teams and tracks scores across the season.',
    technologies: ['HMTL', 'CSS', 'Javascript', 'jQuery']
  },
  {
    title: 'Simon Game',
    img: 'http://pix.toile-libre.org/upload/original/1475495084.png',
    url: 'https://timhandy.github.io/simon/',
    repo: 'https://github.com/TimHandy/simon',
    description: 'Simon is an electronic game of memory skill invented in the 1970\'s.',
    technologies: ['HMTL', 'CSS', 'Javascript', 'jQuery']
  },
  {
    title: 'Pomodoro',
    img: 'http://pix.toile-libre.org/upload/original/1473167257.png',
    url: 'https://timhandy.github.io/pomodoro/',
    repo: 'https://github.com/TimHandy/pomodoro',
    description: 'A Pomodoro is a 25 min countdown timer to aid in productivity.',
    technologies: ['HMTL', 'CSS', 'Javascript', 'jQuery']
  },
  {
    title: 'Calculator',
    img: 'http://pix.toile-libre.org/upload/original/1472821840.png',
    url: 'https://timhandy.github.io/calculator/',
    repo: 'https://github.com/TimHandy/calculator',
    description: 'A calculator with all the common functionality you expect of a standard calculator.',
    technologies: ['HMTL', 'CSS', 'Javascript', 'jQuery']
  },
  {
    title: 'Twitch TV<br/> API CHANGED - BROKEN',
    img: 'http://pix.toile-libre.org/upload/original/1471604448.png',
    url: 'http://codepen.io/timhandy/full/bZJWjq/',
    repo: 'https://github.com/TimHandy/TwitchTV',
    description: 'An application that pulls data from the Twitch API and allows toggling of visual information.',
    technologies: ['HMTL', 'CSS', 'Javascript', 'jQuery', 'API']
  },
  {
    title: 'Wikipedia Viewer',
    img: 'http://pix.toile-libre.org/upload/original/1471603263.png',
    url: 'https://codepen.io/timhandy/full/GqPJyr/',
    repo: 'https://github.com/TimHandy/wikipedia_viewer',
    description: 'A Wikipedia viewer that will make an API call and display the data from the response.',
    technologies: ['HMTL', 'CSS', 'Javascript', 'jQuery', 'API', 'Bootstrap']
  },
  {
    title: 'Local Weather App<br/> API CHANGED - BROKEN',
    img: 'http://pix.toile-libre.org/upload/original/1471603166.png',
    url: 'https://codepen.io/timhandy/full/RRJvaq/',
    repo: 'https://github.com/TimHandy/local_weather',
    description: 'Retrieves the local weather based on your browser geolocation data.',
    technologies: ['HMTL', 'CSS', 'Javascript', 'jQuery', 'API', 'Bootstrap']
  },
  {
    title: 'Portfolio Page',
    img: '',
    url: 'https://timhandy.github.io/portfolio/',
    repo: 'https://github.com/TimHandy/portfolio',
    description: 'This portfolio.',
    technologies: ['Javascript', 'HTML', 'CSS']
  },
  {
    title: 'Random Quotes',
    img: 'http://pix.toile-libre.org/upload/original/1471603315.png',
    url: 'https://codepen.io/timhandy/full/akGGwJ/',
    repo: 'https://github.com/TimHandy/random_quote_generator',
    description: 'Provides a random quote on each button press and enable sending a Tweet of the quote.',
    technologies: ['Javascript', 'HTML', 'CSS', 'Bootstrap']
  },
  {
    title: 'Tribute Page',
    img: 'http://pix.toile-libre.org/upload/original/1471603398.png',
    url: 'https://codepen.io/timhandy/full/eZxGXV/',
    repo: 'https://github.com/TimHandy/tribute_page',
    description: 'Project #1: A simple tribute page to the Extreme Sports star Travis Pastrana.',
    technologies: ['HTML', 'CSS', 'Bootstrap']
  },
  {
    title: 'Google Homepage',
    img: '',
    url: 'http://timhandy.github.io/google-homepage/',
    repo: 'https://github.com/TimHandy/google-homepage',
    description: 'Basic copy of the Google homepage with HTML & CSS',
    technologies: ['HTML', 'CSS']
  }
]


function formatProjects(projectsArr) {
  //console.log('addProjects')

  const newProjectsArr = projectsArr.map(project => {

    const title = project.title || 'TITLE HERE!'
    const img = project.img || './img/JavaScript-Logo.png'
    const repo = project.repo || 'https://github.com/TimHandy'
    const url = project.url || repo || 'https://github.com/TimHandy' 
    const description = project.description || 'DESCRIPTION HERE!'
    const technologies = project.technologies.join(', ') || 'PENDING!'
    

    return `<div class="project"> 
              <a href="${url}" target="_blank">
                <h4>${title}</h4>
                <img src="${img}"/>
              </a>
                <p class="project-description">${description} 
              </p>
              <p class="technologies"><a href="${repo}" target="_blank"><i class="fa fa-github"></i></a> ${technologies}</p>
              
            </div>`
  })

  return newProjectsArr
}


// on page load...DOMContentLoaded
document.addEventListener('DOMContentLoaded', function(event) {
  // cache the projects div
  const projectsDiv = document.querySelector('.projects')

  // get formatted projects and append each to the projects div
  const formattedProjects = formatProjects(projects)
  formattedProjects.map(project => {
    projectsDiv.insertAdjacentHTML( 'beforeend', project )  // apparently better/safer than innerHTML
  })
})