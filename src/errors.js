export const ArgTypeError = (functionName, expected, badValue) =>
  new TypeError(
    `${functionName}() expects ${expected} but it got`
    + JSON.stringify(badValue)
  )

export const PropTypeError = (property, expected, badValue) =>
  new TypeError(`${property} should be ${expected} but it's ${JSON.stringify(badValue)}`)

export const ExtraFieldError = (location, field, hint) =>
  new TypeError(
    `${location} has an unexpected property: ${field}`
      + hint ? `\nHint: ${hint}` : ''
  )
