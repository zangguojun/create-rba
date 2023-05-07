#!/usr/bin/env node
const { printBanner } = require('./utils/banner')

async function init() {
  printBanner()
}

init().catch((e) => {
  console.error(e)
})
