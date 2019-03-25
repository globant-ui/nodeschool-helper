const { prompt } = require('enquirer')
const opn = require('opn')

const selectList = [{
  type: 'select',
  name: 'workshop',
  message: 'Select workshop',
  initial: 1,
  choices: [
    { name: 'Introductory', disabled: '' },
    { name: 'Javascripting' },
    { name: 'Learnyounode' },
    { name: 'How to npm' },
    { name: 'Elementary Electron' },
    { role: 'separator' },
    { name: 'Intermediate', disabled: '' },
    { name: 'Functional Javascript' },
    { name: 'Express Works' },
    { name: 'Promise It Wont Hurt' },
    { name: 'Async you' },
    { name: 'Planet Proto' },
    { name: 'Tower of Babel' },
    { name: 'Scope, Chains & Closures' }
  ]
}]

async function foo (action) {
  switch (action) {
    case 'start':
      let answers = await prompt(selectList)
      startWorkshop(answers.workshop)
      break

    default:
      console.log('\x1b[41m%s\x1b[0m', 'There is no action for this command. Please run "globant-nodeschool -h" for help.')
      process.exit(1)
  }
}

function startWorkshop (workshop) {
  console.log('\x1b[35m%s\x1b[0m', 'Remember that all the global packages and the directories for your exercises were installed and created. \nYou don\'t need to install them again.')
  console.log('\x1b[35m%s\x1b[0m', 'Go to the exercise directory and create your code inside.')
  console.log('\x1b[35m%s\x1b[0m', 'Good luck!')
  console.log('\x1b[36m%s\x1b[0m', 'Opening README on browser...')
  switch (workshop) {
    case 'Javascripting':
      opn('https://github.com/workshopper/javascripting#run-the-workshop')
      break

    case 'Learnyounode':
      opn('https://github.com/workshopper/learnyounode#learn-you-the-nodejs-for-much-win')
      break

    case 'How to npm':
      opn('https://github.com/workshopper/how-to-npm#usage')
      break

    case 'Elementary Electron':
      opn('https://github.com/maxogden/elementary-electron#elementary-electron')
      break

    case 'Functional Javascript':
      opn('https://github.com/timoxley/functional-javascript-workshop#usage-instructions')
      break

    case 'Express Works':
      opn('https://github.com/azat-co/expressworks#expressworks')
      break

    case 'Promise It Wont Hurt':
      opn('https://github.com/stevekane/promise-it-wont-hurt#usage-instructions')
      break

    case 'Async you':
      opn('https://github.com/bulkan/async-you#usage')
      break

    case 'Planet Proto':
      opn('https://github.com/sporto/planetproto#usage-instructions')
      break

    case 'Tower of Babel':
      opn('https://github.com/yosuke-furukawa/tower-of-babel#how-to-use')
      break

    case 'Scope, Chains & Closures':
      opn('https://github.com/workshopper/scope-chains-closures#getting-started')
      break
  }

  /** Hack for kill process on windows */
  setTimeout(() => {
    process.exit(0)
  }, 1000)
}

module.exports = foo
