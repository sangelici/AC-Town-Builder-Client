'use strict'

// RESOURCE EVENTS

const config = require('../config.js')
const store = require('../store.js')

// TOWNS
const createTown = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/towns',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const indexTowns = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/towns',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// RESIDENTS
// const createResident = function (formData) {
//   return $.ajax({
//     method: 'POST',
//     url: config.apiUrl + '/residents',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: formData
//   })
// }

module.exports = {
  createTown,
  indexTowns
  // createResident
}
