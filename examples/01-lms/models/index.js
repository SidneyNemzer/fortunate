import fortunate from 'fortunate'
import loginPlugin from 'fortunate-local-login-plugin'
import accessPlugin from 'fortunate-access-plugin'

import user from './user'

const models = fortunate({
  models: [
    user
  ],
  plugins: [
    loginPlugin,
    accessPlugin({
      roles: [
        'STUDENT',
        'INSTRUCTOR',
        'INSTR_DESIGNER'
      ]
    })
  ]
})

export default models
