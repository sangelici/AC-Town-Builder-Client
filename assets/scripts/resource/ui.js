'use strict'

// RESOURCE UI

// const store = require('../store.js')
const townHandlebar = require('../templates/towns.handlebars')
const allTownsHandlebar = require('../templates/all-towns.handlebars')

const successMessage = function (newText) {
  $('#message2').text(newText)
  $('#message2').removeClass('failure')
  $('#message2').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#message2').text(newText)
  $('#message2').removeClass('success')
  $('#message2').addClass('failure')
}

// TOWNS
const onCreateTownSuccess = function () {
  successMessage(`You're town has been created!`)
}

const onCreateTownFailure = function () {
  failureMessage(`Please try again!`)
}

const onIndexTownSuccess = function (townData) {
  $('.show-all-towns').html(``)
  $('.show-all-towns').append(allTownsHandlebar({towns: townData.towns}))
}

const onIndexTownFailure = function () {
  failureMessage(`Please try again!`)
}

const onShowTownSuccess = function (townData) {
  // console.log(townData)
  $('.show-single-town').html(``)
  $('.show-single-town').append(townHandlebar({towns: townData}))
  $('.show-all-towns').hide()
  $('.update').show()
  $('.delete').show()
  // console.log(store)
}

const onShowTownFailure = function (townData) {
  // console.log(townData)
  failureMessage(`That town doesn't exist! Please Try again!`)
}

const onUpdateTownSuccess = function (townData) {
  successMessage('Updated!')
  onShowTownSuccess(townData)
}

const onUpdateTownFailure = function (townData) {
  successMessage(`Please try again!`)
}

const onDeleteTownSuccess = function (townData) {
  successMessage(`Your Town is gone :(`)
}

const onDeleteTownFailure = function (townData) {
  successMessage(`Please try again!`)
}

// RESIDENTS
// const onCreateResidentSuccess = function () {
//   successMessage(`You're resident has moved in!`)
//   $('#create-res').hide()
// }
//
// const onCreateResidentFailure = function () {
//   failureMessage(`Please try again!`)
// }

module.exports = {
  onCreateTownSuccess,
  onCreateTownFailure,
  onIndexTownSuccess,
  onIndexTownFailure,
  onShowTownSuccess,
  onShowTownFailure,
  onUpdateTownSuccess,
  onUpdateTownFailure,
  onDeleteTownSuccess,
  onDeleteTownFailure
// onCreateResidentSuccess,
// onCreateResidentFailure
}
