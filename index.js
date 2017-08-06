const repl = require('repl')

const replServer = repl.start('> ')

replServer.context.R = require('ramda')

