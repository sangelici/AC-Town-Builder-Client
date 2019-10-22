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
  $('#back').on('click', resourceEvents.onMainPage)
  $('#create-town').on('submit', resourceEvents.onCreateTown)
  $('#index-towns').on('click', resourceEvents.onIndexTowns)
  $('#show-one-town').on('submit', resourceEvents.onShowTown)
  $('.update').hide()
  $('#update-town').on('submit', resourceEvents.onUpdateTown)
  $('.delete').hide()
  $('#delete-town').on('submit', resourceEvents.onDeleteTown)
  // EXTRAS
  $('#rosie').hide()
  // $('#create-res').on('submit', resourceEvents.onCreateResident)
})
