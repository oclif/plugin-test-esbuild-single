import {expect} from 'chai'
import {execSync} from 'node:child_process'
import {existsSync} from 'node:fs'
import {dirname, join} from 'node:path'
import {fileURLToPath} from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

describe('Bundled CLI (single file)', () => {
  const cli = join(__dirname, '..', 'tmp', 'run.mjs')
  before(async () => {
    if (!existsSync(join(__dirname, '..', 'bin', 'run.mjs'))) {
      throw new Error('CLI has not been built yet. Run `yarn run build` before running tests')
    }

    if (!existsSync(cli)) {
      throw new Error('CLI has not been moved to testing location yet.')
    }
  })

  it('should run successfully', async () => {
    const results = execSync(`node ${cli} esbuild`, {stdio: 'pipe'}).toString()
    expect(results).to.include('Greetings! from plugin-test-esbuild-single init hook')
    expect(results).to.include('Greetings! from plugin-test-esm-1 init hook')
    expect(results).to.include('hello I am a bundled (esbuild) plugin from')
  })
})
