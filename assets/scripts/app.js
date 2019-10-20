'use strict'

const authEvents = require('./auth/events.js')
const resourceEvents = require('./resource/events.js')

$(() => {
  // AUTH jQuery
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('nav').hide()
  // RESOURCE jQuery
  $('.resources-navigation').hide()
  $('.create-town-form').hide()
  $('#create-town-btn').on('click', resourceEvents.onCreateTownForm)
  $('#create-town').on('submit', resourceEvents.onCreateTown)
  $('#view-town-btn').on('click', resourceEvents.onIndexTowns)
  // $('#create-res').on('submit', resourceEvents.onCreateResident)
})
