#!/usr/bin/env node

const meow = require('meow')
const updateNotifier = require('update-notifier')
const pkg = require('../package.json')
const app = require('../src')

const cli = meow(`
  Usage: globant-nodeschool [options]

  Options:
        start       Start the Helper

  Other options:
    -h, --help         show usage information
    -v, --version      print version info and exit
  `,
{
  flags: {
    help: {
      type: 'boolean',
      alias: 'h'
    },
    version: {
      type: 'boolean',
      alias: 'v'
    }
  }
})

updateNotifier({ pkg }).notify()

app(cli.input[0], cli.flags)
