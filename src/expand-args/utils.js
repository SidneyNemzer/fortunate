export const isString = value =>
  typeof value === 'string'

export const isArray = value =>
  value instanceof Array

export const isObject = value =>
  typeof value === 'object' && value !== null

export const isNumber = value =>
  typeof value === 'number'

export const isBoolean = value =>
  typeof value === 'boolean'

export const isUndefined = value =>
  typeof value === 'undefined'
