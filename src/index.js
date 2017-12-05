import makeDebug from 'debug'
import cli from './cli'
import { stores, tasks, jobs } from './services'

export * as hooks from './hooks'
export * as utils from './utils'
export { activateHooks, run } from './cli'

const debug = makeDebug('krawler')

export default function init (options = {}) {
  return function () {
    debug('Initializing krawler plugin')
  }
}

init.stores = stores
init.tasks = tasks
init.jobs = jobs

if (require.main === module) {
  cli()
}
