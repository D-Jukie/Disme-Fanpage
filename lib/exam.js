module.exports = {
  config: {
    name: 'exam',
    desc: 'exam command',
    author: "D-Jukie",
    countdown: 0
  }
}

module.exports.run = ({ event, api, users}) => {
  console.log(event)
  console.log(api)
  console.log(users)
}
module.exports.event = ({ event, api, users}) => {
  console.log(event)
  console.log(api)
  console.log(users)
}