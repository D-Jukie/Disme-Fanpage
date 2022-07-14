module.exports = async (userId) => {
	const database = require('./database/users.json')
	const path = require("path").resolve(__dirname, 'database', 'users.json');
	if(database.some(i => i.id == userId)) return
	try {
		var user = await global.api.getInfoUser(userId)
		user.money = 0
		user.request = 0
		database.push(user)
		require('fs-extra').writeFileSync(path, JSON.stringify(database, null, 4));
	}
	catch(e) {}
}