// 비파괴 배열 메소드 및 연산자 
import fs from 'fs';


// product 변경 '양말' 추가 

console.log("BAD====================================================================================");

// 잘못된 사용 예
let state = {
    order: JSON.parse(fs.readFileSync('../json/data.json').toString())
}
let updateProducts = state.order.products;

updateProducts.push({
    no: "s001-091",
    name:"파랑 양말",
    price:2000,
    amount:1
});

console.log(state.order.products, updateProducts, state.order.products === updateProducts); 



console.log("GOOD(concat)====================================================================================");

// 좋은 예(1) - concat
state = {
    order: JSON.parse(fs.readFileSync('../json/data.json').toString())
}

updateProducts = state.order.products.concat({
    no: "s001-091",
    name:"파랑 양말",
    price:2000,
    amount:1
});
console.log(state.order.products, updateProducts, state.order.products === updateProducts); 


console.log("GOOD(spread)====================================================================================");

// 좋은 예(2) - spread
state = {
    order: JSON.parse(fs.readFileSync('../json/data.json').toString())
}

updateProducts = [...state.order.products, {
    no: "s001-091",
    name:"파랑 양말",
    price:2000,
    amount:1
}];
console.log(state.order.products, updateProducts, state.order.products === updateProducts); 