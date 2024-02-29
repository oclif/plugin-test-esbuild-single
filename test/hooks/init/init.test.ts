import {expect, test} from '@oclif/test'

describe('hooks', () => {
  test
    .stdout()
    .hook('init', {id: 'mycommand'})
    .do((output) => expect(output.stdout).to.contain('Greetings! from plugin-test-esbuild-single init hook'))
    .it('shows a message')
})
