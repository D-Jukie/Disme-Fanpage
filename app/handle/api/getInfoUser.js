const axios = require('axios')

const getInfoUser = async (userId) => {
	try {
		var resp = (await axios.get(`https://graph.facebook.com/${userId}?fields=name,gender&access_token=${global.client.FACEBOOK_ACCESS_TOKEN}`)).data
    	return resp
	}
    catch(error) {
      console.log(error)
    }
}
module.exports = getInfoUser