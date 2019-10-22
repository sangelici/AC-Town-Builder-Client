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
  // console.log(formData)
}

const onIndexTowns = function (event) {
  event.preventDefault()
  $('.show-all-towns').show()
  $('.show-single-town').html(``)
  // console.log('get all towns!')
  api.indexTowns()
    .then(ui.onIndexTownSuccess)
    .catch(ui.onIndexTownFailure)
  // console.log(api.indexTowns())
}

const onShowTown = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  // console.log(formData)
  api.showTown(formData.townId)
    .then(ui.onShowTownSuccess)
    .catch(ui.onShowTownFailure)
}

const onUpdateTown = function (event) {
  event.preventDefault()
  const id = $('.town-id').val()
  const name = $('#town-name').val()
  const fruit = $('#town-fruit').val()
  const mayor = $('#town-mayor').val()
  api.updateTown(id, name, fruit, mayor)
    .then(ui.onUpdateTownSuccess)
    .catch(ui.onUpdateTownFailure)
}

const onDeleteTown = event => {
  console.log('hello')
  event.preventDefault()
  // const form = event.target
  // const formData = getFormFields(form)
  const id = $('#delete').val()
  console.log(id)
  api.deleteTown(id)
    .then(ui.onDeleteTownSuccess)
    .catch(ui.onDeleteTownFailure)
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
  onIndexTowns,
  onShowTown,
  onUpdateTown,
  onDeleteTown
  // onCreateResident
}
