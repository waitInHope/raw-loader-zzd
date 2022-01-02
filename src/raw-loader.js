
module.exports = function (src) {
    let code = JSON.stringify(src)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
    .replace('hello', 'hi');

    return `export default ${code}`
}