'use strict'

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

const onSignUpSuccess = function () {
  successMessage(`You're ready to move in!`)
  $('.sign-up').hide()
}

const onSignUpFailure = function () {
  failureMessage('Sign-Up failed, please enter valid email')
}

const onSignInSuccess = function (responseData) {
  successMessage('Welcome!')
  store.user = responseData.user
  $('.sign-up').hide()
  $('.sign-in').hide()
  $('.change-password').show()
  $('.sign-out').show()
}

const onSignInFailure = function () {
  failureMessage('Oh no! Sign In is incorrect. Please try again!')
}

const onChangePasswordSuccess = function () {
  successMessage('Password updated!')
  $('#message').show()
}

const onChangePasswordFailure = function () {
  failureMessage(`Entry failed, PLease try again!`)
  $('#message').show()
}

const onSignOutSuccess = function () {
  successMessage(`Signed out!`)
  $('.sign-up').show()
  $('.sign-in').show()
  $('.change-password').hide()
  $('.sign-out').hide()
}

const onSignOutFailure = function () {
  failureMessage(`Sign out failed. Please try again!`)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
