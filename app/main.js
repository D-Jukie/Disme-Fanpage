'use strict'

const bodyParser = require('body-parser')
const loading = require('./loading.js')
const logger = require('../utils/logger')
const config = require('../config.json')
const app = require('express')()
const listen = require('./listen')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('port', process.env.PORT || 8080);

global.client = new Object();
global.config = config;
global.api = new Object();
global.utils = new Object();
global.lib = new Object();
global.listen = new Object();
global.client = {
  FACEBOOK_ACCESS_TOKEN: config.FACEBOOK_ACCESS_TOKEN,
  PORT: config.PORT,
  VERIFY_TOKEN: config.VERIFY_TOKEN,
  PREFIX: config.PREFIX
}
global.api = {
  getInfoUser: require('./handle/api/getInfoUser'),
  sendMessage: require('./handle/api/sendMessage')
}
global.utils = {
  logger
}
global.lib = {
  commands: new Array()
}

app.get('/', function (req, res) {
  let VERIFY_TOKEN = config.VERIFY_TOKEN
  let mode = req.query['hub.mode']
  let token = req.query['hub.verify_token']
  let challenge = req.query['hub.challenge']
  if (mode && token === VERIFY_TOKEN) {
    res.status(200).send(challenge)
  } else {
    res.sendStatus(403)
  }
}).listen(app.get('port'), () => {
  require('./loading').load()
  console.log('Bot đang hoạt động trên port ' + app.get('port'))
}
)
app.post('/', function (req, res) {
  try {
    if (req.body.object === 'page') {
      req.body.entry.forEach((entry) => {
        entry.messaging.forEach((event) => {
          if(global.listen == event.timestamp) return
          global.listen = event.timestamp
          listen(event)
        })
      })
      res.status(200).end()
    }
  }
  catch(e) {}
})