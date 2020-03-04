'use strict'

var request = require('request')

const baseURL = 'https://api-football-v1.p.rapidapi.com/'

class ApiFootball {
  constructor(API_KEY) {
    this.API_KEY = API_KEY
  }

  /**
   * To get the list of all the available endpoints, visit the API Documentation https://rapidapi.com/api-sports/api/api-football
   *
   * @param {string} endpoint - The endpoint name, i.e.: 'v2/fixtures/live', 'v2/fixtures/date/2020-02-06'
   * @param {string} params - Query parameters to attacht to the request (if any). Examples: {timezone: 'Europe/London'}
   * @return {Promise} The api response
   *
   */
  get(endpoint, params = {}) {
    return new Promise((resolve, reject) => {
      if (!endpoint) return reject(new Error('Endpoint cannot be empty'))

      request(
        {
          uri: `${baseURL}/${endpoint}`,
          qs: params,
          headers: { 'x-rapidapi-key': this.API_KEY },
          json: 'body'
        },
        function(err, response) {
          if (err) return reject(err)
          if (response.statusCode != 200) return reject(response.body)
          resolve(response.body)
        }
      )
    })
  }
}

module.exports = ApiFootball
