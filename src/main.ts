import * as core from '@actions/core'
import { run } from './run'

const main = async (): Promise<void> => {
  await run({
    tags: core.getMultilineInput('tags', { required: true }),
    suffixes: core.getMultilineInput('suffixes', { required: true }),
    builder: core.getInput('builder', { required: true }),
  })
}

main().catch((e: Error) => {
  core.setFailed(e)
  console.error(e)
})
