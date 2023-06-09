import * as console from 'console'

const canGradient = process.stdout.isTTY && process.stdout.getColorDepth() > 8

const stringBanner = 'React - A Java Script Library For Building User Interfaces'

// generated by the following code:
//
// require('gradient-string').pastel(stringBanner)
//
// Use the output directly here to keep the bundle small.
const gradientBanner =
  '\x1B[38;2;116;235;213mR\x1B[39m\x1B[38;2;116;235;228me\x1B[39m\x1B[38;2;116;227;235ma\x1B[39m\x1B[38;2;116;212;235mc\x1B[39m\x1B[38;2;116;198;235mt\x1B[39m \x1B[38;2;116;183;235m-\x1B[39m \x1B[38;2;116;168;235mA\x1B[39m \x1B[38;2;116;153;235mJ\x1B[39m\x1B[38;2;116;138;235ma\x1B[39m\x1B[38;2;116;123;235mv\x1B[39m\x1B[38;2;124;116;235ma\x1B[39m \x1B[38;2;138;116;235mS\x1B[39m\x1B[38;2;153;116;235mc\x1B[39m\x1B[38;2;168;116;235mr\x1B[39m\x1B[38;2;183;116;235mi\x1B[39m\x1B[38;2;198;116;235mp\x1B[39m\x1B[38;2;213;116;235mt\x1B[39m \x1B[38;2;228;116;235mL\x1B[39m\x1B[38;2;235;116;228mi\x1B[39m\x1B[38;2;235;116;213mb\x1B[39m\x1B[38;2;235;116;198mr\x1B[39m\x1B[38;2;235;116;183ma\x1B[39m\x1B[38;2;235;116;168mr\x1B[39m\x1B[38;2;235;116;153my\x1B[39m \x1B[38;2;235;116;138mF\x1B[39m\x1B[38;2;236;116;124mo\x1B[39m\x1B[38;2;236;123;116mr\x1B[39m \x1B[38;2;236;138;116mB\x1B[39m\x1B[38;2;236;153;116mu\x1B[39m\x1B[38;2;236;168;116mi\x1B[39m\x1B[38;2;236;183;116ml\x1B[39m\x1B[38;2;236;198;116md\x1B[39m\x1B[38;2;236;213;116mi\x1B[39m\x1B[38;2;236;228;116mn\x1B[39m\x1B[38;2;228;236;116mg\x1B[39m \x1B[38;2;214;236;116mU\x1B[39m\x1B[38;2;199;236;116ms\x1B[39m\x1B[38;2;184;236;116me\x1B[39m\x1B[38;2;169;236;116mr\x1B[39m \x1B[38;2;154;236;116mI\x1B[39m\x1B[38;2;139;236;116mn\x1B[39m\x1B[38;2;124;236;116mt\x1B[39m\x1B[38;2;116;236;123me\x1B[39m\x1B[38;2;116;236;138mr\x1B[39m\x1B[38;2;116;236;153mf\x1B[39m\x1B[38;2;116;236;168ma\x1B[39m\x1B[38;2;116;236;183mc\x1B[39m\x1B[38;2;116;236;198me\x1B[39m\x1B[38;2;116;236;213ms\x1B[39m'

const defaultBanner = canGradient ? gradientBanner : gradientBanner

const printBanner = (banner = defaultBanner) => {
  console.log(`
    ${banner}
  `)
}

module.exports = {
  stringBanner,
  gradientBanner,
  defaultBanner,
  printBanner
}
