const colors = require('colors')
const { options } = require('./values')

module.exports = function () {
   console.log('QOTD OPTIONS')
   console.log('----------------')

   options.map((o) => {
      console.log('%s %s', colors.bold(o.name), colors.grey('/ ' + o.descr))
      console.log('')
   })
}
