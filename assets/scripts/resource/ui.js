'use strict'

// RESOURCE UI

// const store = require('../store.js')
const townHandlebar = require('../templates/towns.handlebars')
const allTownsHandlebar = require('../templates/all-towns.handlebars')

const successMessage = function (newText) {
  $('.message').text(newText)
  $('.message').removeClass('failure')
  $('.message').addClass('success')
  $('form').trigger('reset')
  setTimeout(function () { failureMessage('') }, 6000)
}

const failureMessage = function (newText) {
  $('.message').text(newText)
  $('.message').removeClass('success')
  $('.message').addClass('failure')
  setTimeout(function () { failureMessage('') }, 6000)
}

// TOWNS
const onCreateTownSuccess = function () {
  successMessage(`You're town has been created!`)
  $('#create-town').trigger('reset')
}

const onCreateTownFailure = function () {
  failureMessage(`Please try again!`)
}

const onIndexTownSuccess = function (townData) {
  $('.create').hide()
  findATownContent()
  const sortedTowns = townData.towns.sort((a, b) => {
    return a.id - b.id
  })
  $('.show-all-towns').append(allTownsHandlebar({towns: sortedTowns}))
}

const onIndexTownFailure = function () {
  failureMessage(`Please try again!`)
}

const onShowTownSuccess = function (townData) {
  // console.log(townData)
  $('.show-single-town').html('')
  $('.show-single-town').append(townHandlebar({towns: townData}))
  $('.show-all-towns').hide()
  $('.update').show()
  $('.delete').show()
  $('#show-one-town').trigger('reset')
  // console.log(store)
}

const onShowTownFailure = function (townData) {
  // console.log(townData)
  failureMessage(`That town doesn't exist! Please Try again!`)
}

const onUpdateTownSuccess = function (townData) {
  $('.message').show()
  successMessage('Updated!')
  onShowTownSuccess(townData)
  $('#update-town').trigger('reset')
}

const onUpdateTownFailure = function (townData) {
  successMessage(`Please try again!`)
}

const onDeleteTownSuccess = function (townData) {
  $('.message').show()
  successMessage(`Your Town is gone :(`)
  $('#delete-town').trigger('reset')
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

const findATownContent = function () {
  $('.show').hide()
  $('.update').hide()
  $('.delete').hide()
}

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
