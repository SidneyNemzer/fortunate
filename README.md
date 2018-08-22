# Fortunate

A versatile data store, ideal for a web application or API server. This package is fortunate core, which allows you to define your application's data schema.

```js
const user = {
  name: 'user',
  fields: {
    username: true,
    password: true,
    roles: true
  },
  permissions: [
    allow('read', 'USER'),
    allow('*', 'OWNER', 'ADMIN')
  ]
}

const post = {
  name: 'post',
  fields: {
    title: String,
    body: String,
    hash: {
      type: String,
      unique: true,
      permissions: [ deny('update', 'OWNER') ]
    },
    author: { type: 'user', owner: true }
  },
  permissions: [
    allow('*', 'OWNER')
  ]
}

const resources = fortunate({
  models: [
    user
  ],
  plugins: [
    loginPlugin(),
    accessPlugin()
  ]
})
```

## Fields

The core provides the following fields:

### `id`

Don't set `{ id: true }`! Every model automatically has an ID.

### `createdAt`

### `updatedAt`

### `deletedAt`

## Attributes

The core provides the following attributes:

### `type`

### `createdAt`

### `updatedAt`

### `deletedAt`

### `unique`

### `relation`

### `default`

----

generate routes from exposed resources (core)
models can auto-map to a resource (core)
users can authenticate (local-login, more?)
permissions restrict some users (access)

resources can be turned into REST / GraphQL APIs (core)

core options:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Model definition schema for fortunate.js",
  "type": "object",
  "definitions": {
    "nativeType": {
      "type": "function",
      "description": "Define a type using a JavaScript object such as String, Number, or Boolean. (They are technically functions)."
    },
    "true": { "enum": [ true ] }
  },
  "properties": {
    "name": { "type":  "string" },
    "fields": {
      "type": "object",
      "additionalProperties": {
        "anyOf": [
          {
            "$ref": "#/definitions/true",
            "description": "Mark a field to have its type automatically determined and possibly attach a plugin."
          },
          { "$ref": "#/definitions/nativeType" },
          {
            "type": "string",
            "description": "Defines the field as a foreign key, where the value is the name of the linked model"
          }
          {
            "type": "object",
            "properties": {
              "type": { "$ref": "#/definitions/nativeType" },
              "unique": {
                "$ref": "#/definitions/true",
                "description": "Enforces that every record of the model should have a different value for the given field"
              }
            }
          }
        ]
      }
    }
  }
}
```
