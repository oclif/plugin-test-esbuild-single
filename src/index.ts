import {Command, Interfaces, execute} from '@oclif/core'
import * as PluginTestEsm1 from '@oclif/plugin-test-esm-1'
import {dirname} from 'node:path'
import {fileURLToPath} from 'node:url'

import pjson from '../package.json' assert {type: 'json'}
import ESBuild from './commands/esbuild.js'
import Hello from './commands/hello/index.js'
import HelloWorld from './commands/hello/world.js'
export {default as INIT_HOOK} from './hooks/init/init.js'

export const ESM1_INIT_HOOK = PluginTestEsm1.hooks.init

export const COMMANDS: Record<string, Command.Class> = {
  ...PluginTestEsm1.commands,
  esbuild: ESBuild,
  hello: Hello,
  'hello:alias': HelloWorld,
  'hello:world': HelloWorld,
}

export async function run() {
  await execute({
    loadOptions: {
      pjson: pjson as unknown as Interfaces.PJSON.Plugin,
      root: dirname(fileURLToPath(import.meta.url)),
    },
  })
}

// Needs to be anonymous function in order to run from bundled file
// eslint-disable-next-line unicorn/prefer-top-level-await
;(async () => {
  await run()
})()
