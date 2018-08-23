import { isObject, isArray, isUndefined } from './utils'
import { ArgTypeError } from '../errors'
import expandModel from './model'

export default args => {
  if (!isObject(args)) {
    throw ArgTypeError('fortunate', 'the first argument to be an options object', args)
  }

  if (!isArray(args.models)) {
    throw ArgTypeError('fortunate', 'an array at options.models', args.models)
  }

  if (!isUndefined(args.plugins) && !isArray(args.plugins)) {
    throw ArgTypeError('fortunate', 'an array at options.models', args.models)
  }

  // TODO figure out which attributes are handled by plugins here

  args.models.map(expandModel({}))
}
