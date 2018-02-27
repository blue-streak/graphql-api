const { encode } = require('../util/id')

function hydrate (json) {
  const result = {
    id: encode('product', json.sku),
    name: json.name,
    sku: json.sku,
    price: json.price
  }

  return result
}

async function formatProduct (response) {
  const json = await response.json()

  return hydrate(json)
}

module.exports = formatProduct
module.exports.hydrate = hydrate
