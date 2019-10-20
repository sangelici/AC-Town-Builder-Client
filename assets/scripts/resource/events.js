'use strict'

// RESOURCE EVENTS

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// TOWNS
const onCreateTownForm = function (event) {
  event.preventDefault()
  $('.create-town-form').show()
  $('#create-town-btn').hide()
  $('#view-town-btn').hide()
}

const onCreateTown = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createTown(formData)
    .then(ui.onCreateTownSuccess)
    .catch(ui.onCreateTownFailure)
  // console.log(formData)
}

const onIndexTowns = function (event) {
  event.preventDefault()
  console.log('get all towns!')
  api.indexTowns()
    .then(ui.onIndexTownSuccess)
    .catch(ui.onIndexTownFailure)
  console.log(api.indexTowns())
}

// RESIDENTS
// const onCreateResident = function (event) {
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   api.createResident(formData)
//     .then(ui.onCreateResidentSuccess)
//     .catch(ui.onCreateResidentFailure)
// }

module.exports = {
  onCreateTown,
  onCreateTownForm,
  onIndexTowns
  // onCreateResident
}
