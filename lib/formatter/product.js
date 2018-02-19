const { encode } = require('../util/id')

async function formatProduct (response) {
  const json = await response.json()

  const result = {
    id: encode('product', json.sku),
    name: json.name,
    sku: json.sku,
    price: json.price
  }

  return result
}

module.exports = formatProduct
