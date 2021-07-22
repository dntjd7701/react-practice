module.exports = function(source){
    console.log(`text-loader processing`);
    return `module.exports={ text: '${source}' }`;
}