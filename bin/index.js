#!/usr/bin/env node
const program = require('commander')

const colors = require('colors')
const qotd = require('../lib/qotd')
const list = require('../lib/list')
const author = require('../lib/author')

/**
 * List QOTD options
 */
program
   .command('list')
   .alias('ls')
   .description('List qotd options')
   .action(function () {
      list()
   })

/**
 * Return a random quote
 */
program
   .command('quick')
   .alias('q')
   .description('Return a random quote')
   .action(function () {
      qotd()
   })

/**
 * Return a quote by specific author
 */
program
   .command('author')
   .alias('a')
   .description('Choose an author and get a quote')
   .action(function () {
      author()
   })

program.parse(process.argv)
