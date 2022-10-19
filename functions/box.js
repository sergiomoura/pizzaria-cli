const box = (msg, erro) => {
    let pad = 3;
    let cor = erro ? '\x1b[31m%s\x1b[0m' : '\x1b[32m%s\x1b[0m';
    console.log(cor, '┌' + '─'.repeat(msg.length + 2*pad)          + '┐');
    console.log(cor, '|' + ' '.repeat(pad) + msg + ' '.repeat(pad) + '|');
    console.log(cor, '└' + '─'.repeat(msg.length + 2*pad)          + '┘');
}

module.exports = box;