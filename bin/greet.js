#! /usr/bin/env node
var greet = require("..");
var parseArgs = require('minimist');

var argv = parseArgs(process.argv.slice(2));
console.log(greet(argv._,argv.drunk));
