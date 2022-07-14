const FACEBOOK_ACCESS_TOKEN = global.client.FACEBOOK_ACCESS_TOKEN
const axios = require('axios')
const sendMessage = async (text, userId, url, type) => {
    if(url) {
        var idUrl = await getAttachmentID(url, type)
        sendAttachmentMessage(userId, idUrl, type)
    }
    var form = {
        messaging_type: 'RESPONSE',
        recipient: {
            id: userId
        },
        message: {
            text
        },
    }
    var resp = (await axios.post(`https://graph.facebook.com/v2.6/me/messages?access_token=${FACEBOOK_ACCESS_TOKEN}`, form)).data
    return resp.data
}
const getAttachmentID = async (url, type) => {
    var form = {
        message: {
            attachment: {
                type: type,
                payload: {
                    is_reusable: true,
                    url: url
                }
            }
        }
    }
    var resp = (await axios.post(`https://graph.facebook.com/v2.6/me/message_attachments?access_token=${FACEBOOK_ACCESS_TOKEN}
    `, form)).data
    return resp.attachment_id
}

const sendAttachmentMessage = async (userId, attachment_id, type) => {
    var form = {
        "recipient": {
            "id": userId
        },
        "message": {
            "attachment": {
                "type": type,
                "payload": {
                    "attachment_id": attachment_id
                }
            }
        }
    }
    var resp = (await axios.post(`https://graph.facebook.com/v2.6/me/messages?access_token=${FACEBOOK_ACCESS_TOKEN}`, form)).data
    return resp.data
}
module.exports = sendMessage