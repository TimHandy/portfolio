const projects = [
    {
    title: 'Responsive CSS',
    img: 'img/responsive.png',
    url: 'https://timhandy.github.io/responsive-page-template/',
    repo: 'https://github.com/TimHandy/responsive-page-template',
    description: 'I cloned a responsive template design using my own HTML & CSS to resemble the original responsiveness',
    technologies: ['CSS', 'HTML']
  },
  {
    title: 'HTML Template to React',
    img: 'img/template-to-react.png',
    url: '',
    repo: 'https://github.com/TimHandy/html-template-to-react',
    description: 'Converted a standard HTML template to React Components',
    technologies: ['React', 'HTML', 'Webpack', 'Express']
  },
  {
    title: 'Today I Learned',
    img: 'img/today-i-learned.png',
    url: 'https://today-i-learned.gomix.me/',
    repo: 'https://github.com/TimHandy/today-i-learned',
    description: 'React app that utilises a Google form and spreadsheet as a data source',
    technologies: ['React', 'Google Sheets', 'Webpack', 'ES6', 'Javascript']
  },
  {
    title: 'React Recipe Box',
    img: 'img/recipebox.png',
    url: 'https://timhandy.github.io/recipe-box/',
    repo: 'https://github.com/TimHandy/recipe-box',
    description: 'CRUD app to store recipes with persistence in localStorage.',
    technologies: ['React', 'Webpack', 'ES6', 'Javascript', 'React-Bootstrap']
  },
  {
    title: 'React Leaderboard',
    img: 'img/leaderboard.png',
    url: 'https://timhandy.github.io/react-camper-leaderboard/',
    repo: 'https://github.com/TimHandy/react-camper-leaderboard',
    description: 'React Front end project: creates a dynamic table from API data. clicking headings refreshes on different API call.',
    technologies: ['React', 'Webpack', 'API', 'Axios', 'ES6', 'Javascript']
  },
  {
    title: 'React Markdown Previewer',
    img: 'img/node-logo.png',
    url: 'https://timhandy.github.io/react-markdown-previewer/',
    repo: 'https://github.com/TimHandy/react-markdown-previewer',
    description: 'React Front end project: live markdown editor.',
    technologies: ['React', 'Javascript', 'Webpack', 'ES6', 'Javascript']
  },
  {
    title: 'Image Search Abstraction Layer',
    img: 'img/node-logo.png',
    url: 'https://image-search-abst-layer.herokuapp.com/',
    repo: 'https://github.com/TimHandy/image-search-abstraction-layer',
    description: 'Returns paginated image search data in JSON format, and stores recent searches in a database.',
    technologies: ['Express', 'Node', 'MongoDB', 'Javascript', 'Heroku']
  },
  {
    title: 'File Metadata Microservice<br/> API CHANGED - BROKEN',
    img: 'img/node-logo.png',
    url: 'https://file-metadata-microsrvc.herokuapp.com/',
    repo: 'https://github.com/TimHandy/file-metadata-microservice',
    description: 'Choose a file to upload and it will return the file size.',
    technologies: ['Node', 'Express', 'Javascript', 'Heroku']
  },
  {
    title: 'Request Header Microservice',
    img: 'img/node-logo.png',
    url: 'https://req-header-service.herokuapp.com/',
    repo: 'https://github.com/TimHandy/request-header-parser-microservice',
    description: 'Queries the HTTP request header and sends back a JSON response containing the user\'s IP address and OS.',
    technologies: ['Node', 'Express', 'Javascript', 'Heroku']
  },
  {
    title: 'URL Shortener Microservice',
    img: 'img/node-logo.png',
    url: 'https://fcc-minurl.herokuapp.com/',
    repo: 'https://github.com/TimHandy/url-shortener-microservice',
    description: 'When using the shortened URL it checks the database and forwards the request to the original URL.',
    technologies: ['Node', 'Express', 'MongoDB', 'Javascript', 'Heroku']
  },
  {
    title: 'Timestamp Microservice',
    img: 'img/node-logo.png',
    url: 'https://mytimestamp-microservice.herokuapp.com/',
    repo: 'https://github.com/TimHandy/timestamp-microservice',
    description: 'Pass a string (unix timestamp or natural language) as a URL parameter and it will return json dates.',
    technologies: ['Node', 'Express', 'Javascript', 'Heroku']
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
    img: 'img/simon.png',
    url: 'https://timhandy.github.io/simon/',
    repo: 'https://github.com/TimHandy/simon',
    description: 'Simon is an electronic game of memory skill invented in the 1970\'s.',
    technologies: ['HMTL', 'CSS', 'Javascript', 'jQuery']
  },
  {
    title: 'Pomodoro',
    img: 'img/pomodoro-timer.png',
    url: 'https://timhandy.github.io/pomodoro/',
    repo: 'https://github.com/TimHandy/pomodoro',
    description: 'A Pomodoro is a 25 min countdown timer to aid in productivity.',
    technologies: ['HMTL', 'CSS', 'Javascript', 'jQuery']
  },
  {
    title: 'Calculator',
    img: 'img/calc.png',
    url: 'https://timhandy.github.io/calculator/',
    repo: 'https://github.com/TimHandy/calculator',
    description: 'A calculator with all the common functionality you expect of a standard calculator.',
    technologies: ['HMTL', 'CSS', 'Javascript', 'jQuery']
  },
  {
    title: 'Twitch TV<br/> API CHANGED - BROKEN',
    img: 'img/twitch-tv.png',
    url: 'https://timhandy.github.io/TwitchTV',
    repo: 'https://github.com/TimHandy/TwitchTV',
    description: 'An application that pulls data from the Twitch API and allows toggling of visual information.',
    technologies: ['HMTL', 'CSS', 'Javascript', 'jQuery', 'API']
  },
  {
    title: 'Wikipedia Viewer',
    img: 'img/wikipedia-search.png',
    url: 'https://timhandy.github.io/wikipedia_viewer/',
    repo: 'https://github.com/TimHandy/wikipedia_viewer',
    description: 'A Wikipedia viewer that will make an API call and display the data from the response.',
    technologies: ['HMTL', 'CSS', 'Javascript', 'jQuery', 'API', 'Bootstrap']
  },
  {
    title: 'Local Weather App<br/> API CHANGED - BROKEN',
    img: 'img/weather.png',
    url: 'https://timhandy.github.io/local_weather/',
    repo: 'https://github.com/TimHandy/local_weather',
    description: 'Retrieves the local weather based on your browser geolocation data.',
    technologies: ['HMTL', 'CSS', 'Javascript', 'jQuery', 'API', 'Bootstrap']
  },
  {
    title: 'Portfolio Page',
    img: 'https://avatars2.githubusercontent.com/u/13509104?v=3&s=460',
    url: 'https://timhandy.github.io/portfolio/',
    repo: 'https://github.com/TimHandy/portfolio',
    description: 'This portfolio. Responsive theme made with vanilla JS, no framework.',
    technologies: ['Javascript', 'HTML', 'CSS']
  },
  {
    title: 'Random Quotes',
    img: 'img/random-quote.png',
    url: 'https://timhandy.github.io/random_quote_generator/',
    repo: 'https://github.com/TimHandy/random_quote_generator',
    description: 'Provides a random quote on each button press and enable sending a Tweet of the quote.',
    technologies: ['Javascript', 'HTML', 'CSS', 'Bootstrap']
  },
  {
    title: 'Tribute Page',
    img: 'img/travis.png',
    url: 'https://timhandy.github.io/tribute_page/',
    repo: 'https://github.com/TimHandy/tribute_page',
    description: 'A simple tribute page to the extreme sports star Travis Pastrana.',
    technologies: ['HTML', 'CSS', 'Bootstrap']
  },
  {
    title: 'Google Homepage',
    img: 'img/google-logo.png',
    url: 'http://timhandy.github.io/google-homepage/',
    repo: 'https://github.com/TimHandy/google-homepage',
    description: 'Copy of the Google homepage with HTML & CSS',
    technologies: ['HTML', 'CSS']
  }
]


const formatProjects = (projectsArr) => {
  //console.log('addProjects')

  const arrOfFormattedProjectDivs = projectsArr.map(project => {

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

  return arrOfFormattedProjectDivs
}

const insertProjects = () => {
  // cache the projects div
  const projectsDiv = document.querySelector('.projects')

  // get formatted projects 
  const formattedProjects = formatProjects(projects)

  // append each formatted project to the projects div
  formattedProjects.forEach(project => {
    projectsDiv.insertAdjacentHTML('beforeend', project) // apparently better/safer than innerHTML
  })
}


// on page load...DOMContentLoaded
document.addEventListener('DOMContentLoaded', insertProjects)



/* ############## Burger-nav functionality ############## */

const getViewportWidth = () => {
  const width = window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  return width
}

document.addEventListener("DOMContentLoaded", function (event) {

  // cache DOM
  const burgerNav = document.querySelector('.burger-nav')
  const nav = document.querySelector('nav')

  const addRemoveHiddenClass = () => {

    const width = getViewportWidth()

    if (width > 600) {
      nav.classList.remove("hidden")
    } else {
      nav.classList.add("hidden")
    }
  }

  // check whether to remove .hidden class on nav menu at first load for large viewports
  addRemoveHiddenClass()

  // handle window size change nav menu visibility
  window.addEventListener("resize", addRemoveHiddenClass);

  // handle burger menu icon clicks
  burgerNav.addEventListener("click", () => {
    nav.classList.toggle("hidden")
  });

  /* ############## end Burger-nav functionality ############## */

});