function encode (type, id) {
  return Buffer.from(`${type}/${id}`).toString('base64')
}

function decode (encoded) {
  const decoded = Buffer.from(encoded, 'base64').toString()
  const [ type, id ] = decoded.split('/')

  return { type, id }
}

module.exports.encode = encode
module.exports.decode = decode
