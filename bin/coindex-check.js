const program = require('commander')
const check = require('../commands/check')
program.command('price')
    .description('Check Price of coins')
    .option('--coin <type>', 'Add specific coins to the list', 'BTC,ETH,XRP')
    .option('--cur <currency>', 'Change the base currency', 'USD')
    .action((cmd) => check.Price(cmd))

program.parse(process.argv)