'use strict'

const authEvents = require('./auth/events.js')
// const resourceEvents = require('./resource/events')

$(() => {
// AUTH jQuery
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('nav').hide()
// RESOURCE jQuery
  $('.resources-navigation').hide()
})
