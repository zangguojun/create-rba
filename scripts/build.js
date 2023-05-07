const dedent = require('dedent')
const esbuild = require('esbuild')
const { default: esbuildPluginLicense } = require('esbuild-plugin-license')

const CORE_LICENSE = `MIT License

Copyright (c) 2023 zangguojun

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`

!(async () => {
  await esbuild.build({
    bundle: true,
    entryPoints: ['index.ts'],
    outfile: 'outfile.cjs',
    format: 'cjs',
    platform: 'node',
    target: 'node14',

    plugins: [
      esbuildPluginLicense({
        thirdParty: {
          includePrivate: false,
          output: {
            file: 'LICENSE',
            template(allDependencies) {
              // There's a bug in the plugin that it also includes the `create-rba` package itself
              const dependencies = allDependencies.filter(
                (d) => d.packageJson.name !== 'create-rba'
              )
              return dedent`
              # create-rba core license
              
              create-rba is released under the MIT license:
              
              ${CORE_LICENSE}
              ## Licenses of bundled dependencies
              
              The published create-rba artifact additionally contains code with the following licenses: ${[
                ...new Set(dependencies.map((dependency) => dependency.packageJson.license))
              ].join(', ')}
              
              ## Bundled dependencies

              ${dependencies
                .map((dependency) => {
                  return (
                    `### ${dependency.packageJson.name}\n\n` +
                    `License: ${dependency.packageJson.license}\n` +
                    `By: ${dependency.packageJson.author.name}\n` +
                    `Repository: ${dependency.packageJson.repository.url}\n\n` +
                    dependency.licenseText
                      .split('\n')
                      .map((line) => (line ? `> ${line}` : '>'))
                      .join('\n')
                  )
                })
                .join('\n\n')}
              `
            }
          }
        }
      })
    ]
  })
})()
