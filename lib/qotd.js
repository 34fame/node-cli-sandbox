const colors = require('colors')
const quotes = require('./quotes')

module.exports = function () {
   console.log('Random Quote')
   console.log('----------------')

   quotes.random().then((msg) => {
      console.log(colors.bold(msg.text))
      console.log(colors.grey('/ ' + msg.author ? msg.author : 'Unknown'))
      console.log('')
   })
}
