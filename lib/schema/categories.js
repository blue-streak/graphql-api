const graphql = require('graphql')
const edges = require('./edges')
const PageInfo = require('./page-info')
const formatCategories = require('../formatter/categories')
const sendGet = require('../magento/get')
const { decode } = require('../util/id')

function getSearchCriteria (root, args) {
  let params = []

  if (root && root.id) {
    params.push({
      field: 'parent_id',
      value: decode(root.id).id,
      condition_type: 'eq'
    })
  }

  if (args.level) {
    params.push({
      field: 'level',
      value: args.level,
      condition_type: 'eq'
    })
  }

  if (args.ids) {
    params.push({
      field: 'entity_id',
      value: args.ids.map((id) => decode(id).id).join(','),
      condition_type: 'finset'
    })
  }

  return params
    .map((param, idx) => [
      `searchCriteria[filter_groups][${idx}][filters][0][field]=${param.field}`,
      `searchCriteria[filter_groups][${idx}][filters][0][value]=${param.value}`,
      `searchCriteria[filter_groups][${idx}][filters][0][condition_type]=${param.condition_type}`
    ].join('&'))
    .join('&')
}

const CategoriesType = new graphql.GraphQLObjectType({
  name: 'categories',

  fields: () => ({
    pageInfo: {
      type: PageInfo
    },

    edges: {
      type: edges(require('./category').type)
    }
  })
})

const Categories = {
  type: CategoriesType,

  args: {
    ids: {
      type: graphql.GraphQLList(graphql.GraphQLID)
    },

    level: {
      type: graphql.GraphQLInt
    }
  },

  resolve: async (root, args) => {
    const params = getSearchCriteria(root, args)

    const endpoint = `/V1/categories/list?${params}`

    const response = await sendGet(endpoint)

    return {
      pageInfo: {
        hasPrevPage: false,
        hasNextPage: false
      },

      edges: await formatCategories(response)
    }
  }
}

module.exports = Categories
