const { readdirSync } = require('fs-extra');
const { join } = require('path');
const logger = require('../utils/logger')
const lib = join(process.cwd(), "/lib/");
const commands = readdirSync(lib).filter((file) => file.endsWith(".js") && file !== 'exam.js');
module.exports.load = () => {
  global.lib = {
    commands: new Array(),
    countdown: new Array(),
    envConfig: new Array()
  }
  for(let i of commands) {
  	try {
  		var cmd = require(lib + i)
  		if(!cmd.config || !cmd.config.name || !cmd.run) {
  			logger.error('File ' + i + ' không đúng định dạng')
  			continue
  		}
  		global.lib.commands.push(cmd)
      logger('Load file ' + cmd.config.name + ' thành công!', 'LOAD')
  	}
  	catch(error) {
  		logger.error('Đã xảy ra lỗi khi load file ' + i)
  	}
  }
}
