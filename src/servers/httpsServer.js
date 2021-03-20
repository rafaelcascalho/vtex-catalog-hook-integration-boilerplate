const fs = require('fs')
const path = require('path')
const https = require('https')

const app = require('../app')
const { KEY_PASSPHRASE, PORT, serverRunningStr } = require('../config')

const options = {
  passphrase: KEY_PASSPHRASE,
  key: fs.readFileSync(path.resolve('ssl/serverKey.pem')),
  cert: fs.readFileSync(path.resolve('ssl/serverCert.pem')),
}

https.createServer(options, app).listen(PORT)
console.log(serverRunningStr('https'))
