const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.options('*', cors())
app.use(express.static('build'))

app.use(express.json())
const router = require('./routes/mainrouter')

app.use('/api/', router)

const PORT = process.env.PORT || 3002

app.listen(PORT, () => {
  console.log('server running!!!!')
})
