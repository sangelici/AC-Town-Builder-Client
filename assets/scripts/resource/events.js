'use strict'

// RESOURCE EVENTS

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// TOWNS
const onCreateTown = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createTown(formData)
    .then(ui.onCreateTownSuccess)
    .catch(ui.onCreateTownFailure)
  console.log(formData)
}

// RESIDENTS
const onCreateResident = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createResident(formData)
    .then(ui.onCreateResidentSuccess)
    .catch(ui.onCreateResidentFailure)
}

module.exports = {
  onCreateTown,
  onCreateResident
}
