const inquirer = require('inquirer')
const colors = require('colors')
const pad = require('pad')
const quotes = require('./quotes')
const values = require('./values')

const questions = [{ type: 'list', name: 'author', message: 'Choose an author', choices: values.authors }]

module.exports = function () {
   console.log('Author Quote')
   console.log('----------------')

   inquirer.prompt(questions).then(function (answers) {
      quotes.author(answers.author).then((msg) => {
         console.log(colors.bold(msg.text))
         console.log(colors.grey('/ ' + msg.author))
         console.log('')
      })
   })
}
