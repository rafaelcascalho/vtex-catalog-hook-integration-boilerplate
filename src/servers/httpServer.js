const app = require('../app')
const { PORT, serverRunningStr } = require('../config')

app.listen(PORT, () => console.log(serverRunningStr('http')))
