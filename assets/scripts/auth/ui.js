'use strict'

// AUTH UI

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
  successMessage('You\'re signed in!')
  store.user = responseData.user
  $('.main-header').text('Welcome Home!').css('font-size', '5em')
  $('.form').hide()
  $('nav').show()
  $('.form2').show()
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
  $('.main-header').text('Animal Crossing Town Builder').css('font-size', '3em')
  $('.form').show()
  $('nav').hide()
  $('.form2').hide()
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
