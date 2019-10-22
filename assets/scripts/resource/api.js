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

const showTown = function (townId) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/towns/' + townId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateTown = function (id, name, fruit, mayor) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/towns/` + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'town': {
        'id': id,
        'name': name,
        'town_fruit': fruit,
        'mayor': mayor
      }
    }
  })
}

// const destroy = function (id) {
//   console.log(id)
//   return $.ajax({
//     method: 'DELETE',
//     url: config.apiUrl + `/towns/${id}`,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

const deleteTown = (formData) => {
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + `/towns/${formData}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
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
  indexTowns,
  showTown,
  updateTown,
  deleteTown
  // createResident
}
