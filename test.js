const ApiFootball = require('./index')
const apiFootball = new ApiFootball('YOUR-API-KEY')
const { assert } = require('chai')

describe('Calls', function() {
  it('/live', async function() {
    const liveFixtures = await apiFootball.get('v2/fixtures/live', {
      timezone: 'Europe/London'
    })
    assert.isObject(liveFixtures, 'The response is not an object')
  })

  it('/fixtureFronOneDate', async function() {
    const fixtureFronOneDate = await apiFootball.get(
      'v2/fixtures/date/2020-02-06',
      {
        timezone: 'Europe/London'
      }
    )
    assert.isObject(fixtureFronOneDate, 'The response is not an object')
  })
})
