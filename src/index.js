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
    { name: 'Elementary electron' },
    { role: 'separator' },
    { name: 'Intermediate', disabled: '' },
    { name: 'Functional Programming' },
    { name: 'Express' },
    { name: 'Promises' },
    { name: 'Async/Await' },
    { name: 'Prototype' },
    { name: 'ES6' },
    { name: 'Scoping' },
    { role: 'separator' }
  ]
}]

async function foo (action) {
  switch (action) {
    case 'start':
      let answers = await prompt(selectList)
      startWorkshop(answers.workshop)
      break

    default:
      console.log('There is no action for this command. Please run "globant-nodeschool -h" for help.')
      break
  }
}

function startWorkshop (workshop) {
  console.log('Opening README on browser...')
  switch (workshop) {
    case 'Javascripting':
      opn('https://github.com/workshopper/javascripting#run-the-workshop')
      break

    case 'Learnyounode':
      opn('https://github.com/workshopper/learnyounode#learn-you-the-nodejs-for-much-win')
      break

    default:
      break
  }
}

module.exports = foo
