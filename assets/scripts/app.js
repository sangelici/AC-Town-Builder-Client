'use strict'

const authEvents = require('./auth/events.js')
const resourceEvents = require('./resource/events.js')

$(() => {
  // Images
  $('#rosie').hide()
  $('#kicks').hide()
  $('#kk-slider').hide()
  $('#boy-villager').hide()
  $('#girl-villager').hide()
  $('#tree').hide()
  $('#balloon').hide()
  // AUTH jQuery
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('nav').hide()
  // RESOURCE jQuery
  $('.buttons').hide()
  // $('#back').on('click', resourceEvents.onMainPage)

  // CREATE EVENT LISTENERS
  $('.create').hide()
  $('.create-btn').on('click', () => {
    $('.create').show()
    $('.show-all-towns').hide()
    $('.show').hide()
    $('.update').hide()
    $('.delete').hide()
    $('.create-town').on('submit', resourceEvents.onCreateTown)
  })
  // INDEX EVENT LISTENER
  $('#index-towns').on('click', resourceEvents.onIndexTowns)

  // SHOW EVENT LISTENERS
  $('.show').hide()
  $('.show-btn').on('click', () => {
    $('.show').show()
    $('.create').hide()
    $('.show-all-towns').hide()
    $('.show-one-town').on('submit', resourceEvents.onShowTown)
  })
  // EDIT EVENT LISTENERS
  $('.update').hide()
  $('.delete').hide()
  $('.edit-btn').on('click', () => {
    $('.update').show()
    $('.delete').show()
  })
  $('#update-town').on('submit', resourceEvents.onUpdateTown)
  $('#delete-town').on('submit', resourceEvents.onDeleteTown)

  // $('#create-res').on('submit', resourceEvents.onCreateResident)
})
