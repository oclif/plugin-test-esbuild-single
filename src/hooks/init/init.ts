import {Hook, ux} from '@oclif/core'

const hook: Hook<'init'> = async function () {
  ux.log('Greetings! from plugin-test-esbuild-single init hook')
}

export default hook
