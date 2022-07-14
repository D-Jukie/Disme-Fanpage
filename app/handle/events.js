module.exports = (event) => {
	var start = global.lib.commands.find(i => i.event)
    start.event({ event, api: global.api, users: require('./database/users.json')})
}