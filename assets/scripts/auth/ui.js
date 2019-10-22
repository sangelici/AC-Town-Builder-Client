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
}

const onSignUpFailure = function () {
  failureMessage('Sign-Up failed, please enter valid email')
}

const onSignInSuccess = function (responseData) {
  successMessage(`You're signed in!`)
  store.user = responseData.user
  $('.main-header').text('Welcome Home!').css('font-size', '4.5em')
  $('.box2').css('height', '64vh')
  $('.form').hide()
  $('nav').show()
  $('#kk-slider').hide()
  $('#boy-villager').hide()
  $('#girl-villager').hide()
  $('#tree').hide()
  $('#balloon').hide()
  cssSecondPage()
}

const onSignInFailure = function () {
  failureMessage('Oh no! Sign In is incorrect. Please try again!')
}

const onChangePasswordSuccess = function () {
  successMessage('Password updated!')
  $('#message').show()
}

const onChangePasswordFailure = function () {
  failureMessage(`Entry failed, Please try again!`)
  $('#message').show()
}

const onSignOutSuccess = function () {
  successMessage(`Goodbye! Come back soon!`)
  $('.form').show()
  $('nav').hide()
  $('#tom-nook').hide()
  $('#kk-slider').show()
  $('#boy-villager').show()
  $('#girl-villager').show()
  $('#tree').show()
  $('#balloon').show()
  cssFirstPage()
}

const onSignOutFailure = function () {
  failureMessage(`Sign out failed. Please try again!`)
}

const cssFirstPage = function () {
  $('#rosie').hide()
  $('#kicks').hide()
  $('.main-header').text('Animal Crossing Town Builder').css('font-size', '3em')
  $('body').css('background', 'url(background.jpg)').css('border', '20px solid #ffffe0')
  $('.box1').css('background-color', '#fff7e0').css('border', '10px solid #ffee97')
  $('.box2').css('background-color', '#fff7e0').css('border', '10px solid #ffee97').css('height', '70vh')
  $('.cute-btn').css('background-color', '#fff7e0').css('box-shadow', '0px 6px 0px #e8cea2')
}

const cssSecondPage = function () {
  $('#tom-nook').hide()
  $('#gyroid').hide()
  $('#rosie').show()
  $('#kicks').show()
  $('body').css('background', 'url(background2.png)').css('border', '20px solid #4b78e3')
  $('.box1').css('background-color', '#cbc2ed').css('border', '10px solid #a38dd6')
  $('.box2').css('background-color', '#cbc2ed').css('border', '10px solid #a38dd6')
  $('.cute-btn').css('background-color', '#9cf0cc').css('box-shadow', '0px 6px 0px #64b399')
}


// Polka dot background
// .css('background-image', 'radial-gradient(#bcaed9 20%, transparent 0),radial-gradient(#bcaed9 20%, transparent 0)').css('background-size', '30px 30px').css('background-position', '0 0, 15px 15px')

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
