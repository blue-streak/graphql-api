const { hydrate } = require('./category')
const { encode } = require('../util/id')

async function formatCategories (response) {
  const json = await response.json()

  return json.items.map((item) => ({
    cursor: encode('category', item.id),
    node: hydrate(item)
  }))
}

module.exports = formatCategories
