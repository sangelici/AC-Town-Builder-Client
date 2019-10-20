'use strict'

// RESOURCE UI

const store = require('../store.js')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

// TOWNS
const onCreateTownSuccess = function () {
  successMessage(`You're town has been created!`)
  $('.create-town-form').hide()
  $('#create-town-btn').show()
  $('#view-town-btn').show()
}

const onCreateTownFailure = function () {
  failureMessage(`Please try again!`)
}

const onIndexTownSuccess = function (responseData) {
  successMessage(`Your Town List`)
  store.town = responseData.town
}

const onIndexTownFailure = function () {
  failureMessage(`Please try again!`)
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
  onIndexTownFailure
//   onCreateResidentSuccess,
//   onCreateResidentFailure
}
