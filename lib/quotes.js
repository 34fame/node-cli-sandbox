const axios = require('axios')

const BASEURL = 'https://type.fit/api/quotes'

async function getQuotes() {
   return axios.get(BASEURL).then((result) => {
      return result.data
   })
}

async function picker(author) {
   let quotes = await getQuotes()
   if (author) {
      quotes = quotes.filter((q) => q.author === author)
   }
   return quotes[Math.floor(Math.random() * quotes.length)]
}

const aggregate = async () => {
   const quotes = await getQuotes()
   let counts = {}
   quotes.map((q) => {
      if (!q.author) return false
      if (counts[q.author]) {
         counts[q.author] += 1
      } else {
         counts[q.author] = 1
      }
   })
   let popular = {}
   Object.keys(counts).map((key) => {
      if (!popular.author) {
         popular = {
            author: key,
            count: counts[key],
         }
      }
      if (counts[key] > popular.count) {
         popular = {
            author: key,
            count: counts[key],
         }
      }
   })
   return popular
}

exports.random = async function () {
   return picker()
}

exports.popular = async function () {
   return aggregate()
}

exports.author = async function (author) {
   return picker(author)
}
