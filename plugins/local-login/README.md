## fortunate-access-plugin

A fortunate plugin that provides authentication, aka accept a username and password and remember that account between requests.

## Fields

The plugin can handle the following fields:

### `user.username`

```
{ type: String, unique: true }
```

### `user.password`

```
{
  type: String,
  permissions: [
    { allow: false, action: 'read', roles: [ 'ADMIN' ] }
    // AKA deny('read', 'ADMIN')
  ]
}
```

Note that no one, including admins, can read passwords. Why would an admin want to see a hashed password anyway?

**Important**: permissions does nothing unless you are using a plugin that consumes them, such as fortunate-access-plugin.
