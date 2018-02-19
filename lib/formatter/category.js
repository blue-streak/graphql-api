const { encode } = require('../util/id')
const keyBy = require('lodash/keyBy')

async function formatCategory (response) {
  const json = await response.json()
  const attributes = keyBy(json.custom_attributes, 'attribute_code')

  const result = {
    id: encode('category', json.id),
    parentId: encode('category', json.parent_id),
    name: json.name,
    products: []
  }

  if (attributes.image) {
    result.image = `/media/catalog/category/${attributes.image.value}`
  }

  return result
}

module.exports = formatCategory
