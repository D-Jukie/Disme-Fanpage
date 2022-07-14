module.exports = (event) => {
    var args = event.message.body
            .slice(global.config.PREFIX.length, event.message.body.length)
            .split(" ")
            .slice(1);
    var command = event.message.body.slice(global.config.PREFIX.length, event.message.body.length).split(" ")[0];
    var body = event.message.body.slice(global.config.PREFIX.length + command.length + 1, event.message.body.length);
    var timeStart = Date.now();
    var time = require("moment-timezone").tz("Asia/Ho_Chi_minh").format("HH:MM:ss DD/MM/YYYY");
    global.utils.logger(`[ ${time} ] \x1b[32mCommand: \x1b[37m${global.config.PREFIX + command} | \x1b[34mUser: \x1b[37m${event.senderID} | \x1b[35mProcess Time: \x1b[37m${(Date.now()) - timeStart}ms`, "DEV MODE");
    
    if(!global.lib.commands.some(i => i.config.name == command)) {
        global.api.sendMessage('[!] • Lệnh bạn sử dụng không tồn tại!\n-> Vui lòng nhấn !help để xem danh sách lệnh.', event.senderID)
    }
    var start = global.lib.commands.find(i => i.config.name == command)
    start.run({ event, api: global.api, users: require('./database/users.json'), args })

}