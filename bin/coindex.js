#!/usr/bin/env node

const program = require('commander')
program
    .version('1.0.0')
    .command('key', 'Manage APIs -- from https://nomics.com')
    .command('check', 'Check Bitcoin Price')
    .parse(process.argv)