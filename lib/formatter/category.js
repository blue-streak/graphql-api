const { encode } = require('../util/id')

async function formatCategory (response) {
  const json = await response.json()

  const result = {
    id: encode('category', json.id),
    parentId: encode('category', json.parent_id),
    name: json.name,
    products: []
  }

  return result
}

module.exports = formatCategory
