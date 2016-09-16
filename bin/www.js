'use strict'

require('babel-core/register')({
  presets: ['es2015'],
  plugins: [
    ['module-resolver', {
      root: ['./app']
    }]
  ]
})

require('../app')
