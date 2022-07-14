module.exports = (data, type) => {
  var color = ['\x1B[33m', '\x1B[34m', '\x1B[35m', '\x1B[36m', '\x1B[32m']
  var more = color[Math.floor(Math.random() * color.length)]
  console.log(more + `[ ${type} ] -> ` + data)
}

module.exports.error = (data) => {
  var color = "\x1b[31m"
  console.log(color + "[ ERROR ] -> " + `[ ${data} ]`  )
}