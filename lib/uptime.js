module.exports = {
  config: {
    name: 'uptime',
    desc: 'Xem thời gian bot đã hoạt động',
    author: "D-Jukie",
    countdown: 0
  }
}

module.exports.run = async ({ event, api, users}) => {
  const { senderID } = event;
  const fast = require('fast-speedtest-api')
  const speedTest = new fast({
    token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
    verbose: false,
    timeout: 10000,
    https: true,
    urlCount: 5,
    bufferSize: 8,
    unit: fast.UNITS.Mbps
  });
  const resault = await speedTest.getSpeed();
  const time = process.uptime()
  const hours = Math.floor(time / (60 * 60))
  const minutes = Math.floor((time % (60 * 60)) / 60)
  const seconds = Math.floor(time % 60);
  return api.sendMessage(`[ Disme Bot ] - Page Facebook\n\n❯ Time: ${hours}:${minutes}:${seconds}\n❯ Fast: ${resault.toFixed()}Mbs`, senderID);
}
