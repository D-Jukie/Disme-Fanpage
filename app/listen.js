const axios = require('axios')
const commands = require('./handle/commands')
const events = require('./handle/events')
const createDatabase = require('./handle/createDatabase')

module.exports = (event) => {
  if(!event.read) {
    var type = !event.message.attachments ? 'message' : 'media'
    event.senderID = event.sender.id
    event.botID = event.recipient.id
    event.message.body = event.message.text
    event.message.messageID = event.message.mid
    delete event.recipient
    delete event.sender
    delete event.message.nlp
    delete event.message.text
    delete event.message.mid
    createDatabase(event.senderID)
    if(event.message.body.split("")[0] == global.client.PREFIX) {
      commands(event)
    }
    events(event)
  }
}
