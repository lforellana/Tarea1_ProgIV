const yargs = require('yargs')

const { require } = require('yargs')
.option('num1', {alias:'a', type: 'numero'})
.option('num2', {alias:'b', type: 'numero'})

let mult = yargs.argv.a * yargs.argv.b;
console.log(mult)