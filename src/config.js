require('dotenv').config()

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || 'localhost'

module.exports = {
  PORT,
  KEY_PASSPHRASE: process.env.KEY_PASSPHRASE || '',
  serverRunningStr: (protocol) => {
    return `> server running at ${protocol}://${HOST}:${PORT}...`
  },
}
