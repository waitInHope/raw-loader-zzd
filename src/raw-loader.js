
const loaderUtils = require('loader-utils');
const fs = require('fs');
const path = require('path');

module.exports = function (src) {
    // 关闭loader缓存
    this.cacheable(false);

    const callback = this.async();
    const { name } = loaderUtils.getOptions(this);
    console.log('name', name);
    
    let code = JSON.stringify(src)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
    .replace('hello', 'hi');

    fs.readFile(path.join(__dirname, './async.txt'), 'utf-8', (err, data) => {
        if(err) {
            callback(err, '');
        }
        console.log('async loader processing: ', data);
        callback(null, data);
    })

    // throw new Error('Error');
    // this.callback(new Error('Error'), code);

    // return `export default ${code}`
    // this.callback(null, code, 2, 3, 4);
}