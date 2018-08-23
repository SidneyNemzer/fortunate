import * as R from 'ramda'
import { isString, isObject } from './utils'
import { PropTypeError, ExtraFieldError } from '../errors'
import expandField from './field'

const builtinModelOptions = ['name', 'fields']

export default (
  pluginAttributes,
  pluginFields,
  pluginModelOptions
) => (model, index) => {
  const location = `options.models[${index}]`

  if (!isString(model.name)) {
    throw PropTypeError(`${location}.name`, 'should be a string', model.name)
  }

  // TODO check for duplicate model names

  if (!isObject(model.fields)) {
    throw PropTypeError(`${location}.name`, 'should be an object', model.name)
  }

  const modelExpandedFields = {
    ...model,
    fields: R.mapObjIndexed(expandField, model.fields)
  }

  return R.mapObjIndexed(
    (value, field) => {
      if (!builtinModelOptions.includes(field)) {
        if (!pluginModelOptions[field]) {
          throw ExtraFieldError(location, field, 'You might need a plugin to handle this model field')
        }
        return pluginModelOptions[field](value)
      }
      return value
    },
    modelExpandedFields
  )
}
