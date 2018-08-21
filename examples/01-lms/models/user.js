import { allow } from 'fortunate-access-plugin'

export default {
  name: 'user',
  fields: {
    username: true,
    password: true,
    roles: true
  },
  permissions: {
    '*': [
      allow('read', 'USER'),
      allow('*', 'OWNER', 'ADMIN')
    ]
  }
}
