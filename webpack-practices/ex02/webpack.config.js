// common js 방식으로 
// 소스는 ES6 방식 

const path = require('path');

module.exports = {
    entry: path.resolve('src/index.js'),
    output:{
        path: path.resolve('public'),
        filename: 'bundle.js'
    }

}