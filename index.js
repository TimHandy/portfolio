

const projects = [
  {
    title: '',
    img: '',
    url: '',
    description: '',
    technologies: ['']
  },
  {
    title: 'Dungeon Crawler',
    img: '',
    url: '',
    description: 'React Front end project',
    technologies: ['React']
  },
  {
    title: 'Game of Life',
    img: '',
    url: '',
    description: 'React Front end project',
    technologies: ['React']
  },
  {
    title: 'React Leaderboard',
    img: '',
    url: '',
    description: 'React Front end project',
    technologies: ['React']
  },
  {
    title: 'React Markdown Previewer',
    img: '',
    url: '',
    description: 'React Front end project',
    technologies: ['React']
  },
  {
    title: 'Image Search Abstraction Layer',
    img: '',
    url: '',
    description: 'Express Back end project',
    technologies: ['Express', 'Node']
  },
  {
    title: 'File Metadata Microservice',
    img: '',
    url: '',
    description: 'Express Back end project',
    technologies: ['React']
  },
  {
    title: 'URL Shortener',
    img: '',
    url: '',
    description: 'Express Back end project',
    technologies: ['React']
  },
  {
    title: 'Teams Chooser',
    img: '',
    url: '',
    description: 'Express Back end project',
    technologies: ['HTML', 'jQuery']
  },
  {
    title: 'Simon Game',
    img: 'http://pix.toile-libre.org/upload/original/1475495084.png',
    url: 'http://codepen.io/timhandy/full/BLRzVb/',
    description: 'Simon is an electronic game of memory skill invented in the 1970\'s.',
    technologies: ['React']
  },
  {
    title: 'Pomodoro',
    img: 'http://pix.toile-libre.org/upload/original/1473167257.png',
    url: '"http://codepen.io/timhandy/full/RGNEbv/',
    description: 'A Pomodoro is a 25 min countdown timer to aid in productivity',
    technologies: ['PENDING']
  },
  {
    title: 'File Metadata Microservice',
    img: '',
    url: '',
    description: 'Express Back end project',
    technologies: ['React']
  },
  {
    title: 'Calculator',
    img: 'http://pix.toile-libre.org/upload/original/1472821840.png',
    url: 'http://codepen.io/timhandy/full/ORJrEm/',
    description: 'A calculator with all the common functionality you expect of a standard calculator.',
    technologies: ['PENDING']
  },
  {
    title: 'Twitch TV',
    img: 'http://pix.toile-libre.org/upload/original/1471604448.png',
    url: 'http://codepen.io/timhandy/full/bZJWjq/',
    description: 'An application that pulls data from the Twitch API and allows toggling of visual information',
    technologies: ['PENDING']
  },
  {
    title: 'Wikipedia Viewer',
    img: 'http://pix.toile-libre.org/upload/original/1471603263.png',
    url: 'https://codepen.io/timhandy/full/GqPJyr/',
    description: 'A Wikipedia viewer that will make an API call and display the data from the response.',
    technologies: ['PENDING']
  },
  {
    title: 'Local Weather App',
    img: 'http://pix.toile-libre.org/upload/original/1471603166.png',
    url: 'https://codepen.io/timhandy/full/RRJvaq/',
    description: 'Retrieves your weather based on your browser geolocation data.',
    technologies: []
  },
  {
    title: 'Random Quotes',
    img: 'http://pix.toile-libre.org/upload/original/1471603315.png',
    url: 'https://codepen.io/timhandy/full/akGGwJ/',
    description: 'Provides a random quote on each button press and enable sending a Tweet of the quote.',
    technologies: ['Javascript', 'HTML', 'CSS', 'Bootstrap']
  },
  {
    title: 'Tribute Page',
    img: 'http://pix.toile-libre.org/upload/original/1471603398.png',
    url: 'https://codepen.io/timhandy/full/eZxGXV/',
    description: 'My first webpage; a tribute page to the Extreme Sports star Travis Pastrana',
    technologies: ['HTML', 'CSS', 'Bootstrap']
  }
]


function formatProjects(projectsArr) {
  //console.log('addProjects')

  const formattedProjects = projects.map(project => {

    const title = project.title || 'TITLE HERE'
    const img = project.img || 'https://unsplash.it/200/300/?random'
    const url = project.url || 'https://github.com/TimHandy'
    const description = project.description || 'DESCRIPTION HERE!'
    const technologies = project.technologies.join(', ') || 'PENDING'
    

    return `<div class="project"> 
              <a href="${url}" target="_blank">
                <h4>${title}</h4>
                <img src="${img}"/>
                <p class="project-description">${description}</p>
                <p>Technologies: ${technologies}</p>
              </a>
            </div>`
  })

  return formattedProjects
}


// on page load...
document.addEventListener('DOMContentLoaded', function(event) {
  console.log('DOM fully loaded and parsed')

  // cache the projects div
  const projectsDiv = document.querySelector('.projects')

  // get formatted projects and append to the projects div
  const formattedProjects = formatProjects(projects)
  formattedProjects.map(project => {
    projectsDiv.insertAdjacentHTML( 'beforeend', project )  // apparently better/safer than innerHTML
  })
})