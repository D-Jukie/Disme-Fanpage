module.exports = {
  config: {
    name: 'say',
    desc: 'Chuyển văn bản thành giọng nói của Google',
    author: "D-Jukie",
    countdown: 0
  }
}

module.exports.run = ({ event, api, users, args }) => {
  try {
    var content = args.join(' ')
    var languageToSay = (["ru","en","ko","ja"].some(item => content.indexOf(item) == 0)) ? content.slice(0, content.indexOf(" ")) : 'vi';
    var msg = (languageToSay != 'vi') ? content.slice(3, content.length) : content;
    return api.sendMessage('Thành công!', event.senderID, `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(msg)}&tl=${languageToSay}&client=tw-ob`, 'audio');
  } catch (e) { return console.log(e) };
}