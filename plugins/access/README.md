## fortunate-access-plugin

A fortunate plugin that enables authorization/permissions/access control on models and their fields.

> Note: this plugin requires a plugin that supports authentication such as fortunate-local-login-plugin

## Built-in roles

* ADMIN -- A user with the ADMIN role. Admins have access to everything unless explicitly denied. (Other roles do not have access unless explicitly allowed).
* USER -- Someone that's logged in
* OWNER -- A user whos ID matches the owner ID of the resource being accessed

> Defining these roles won't do anything. New users are created with only the USER role by default.

## Fields

The plugin can handle the following fields:

### `roles`

```
{ roles: [ Role ] }
```

## Attributes

The following attributes may be set on model fields

### `owner`

Treats the field as the ID of the owner, allowing the OWNER permission to be used with the model.

```
{ owner: true }
```
