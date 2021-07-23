const babel = require('@babel/core');


const resultOfCompile = babel.transform("() => 1;", {});

console.log(resultOfCompile);
