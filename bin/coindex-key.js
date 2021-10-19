const program = require('commander')
const key = require('../commands/key')
program.command('set').description('set API -- from https://nomics.com').action(key.setM)
program.command('show').description('show API -- from https://nomics.com').action(key.show)
program.command('remove').description('remove API -- from https://nomics.com').action(key.remove)
program.parse(process.argv)