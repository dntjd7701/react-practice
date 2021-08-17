import React, { Component } from 'react';
import ListItem from './ListItem';

export default  class FoodList extends Component{
    render(){
        console.log(this.props.foods);

        // <ListItem/> 는 함수로 변환되기 때문에 아래와 같은 방식으로 사용이 가능하다. 
        // return 부분에 구문을 쓸 수 없기 때문에 아래와 같이 만들었다.
        // const foods = [ <ListItem/>, <ListItem/>, <ListItem/> ];
        // this.props.foods.forEach(function(food, index){
        //     foods[index] = <ListItem key={food.no} name={food.name} quantity={food.quantity} />;
        // });

        // Template의 문법을 따로 배우지 않고 javascript 구문을 그대로 사용할 수 있는 것도 React의 장점이다.
        return (
            <ul>
                { this.props.foods.map((food) =>  <ListItem key={food.no} name={food.name} quantity={food.quantity}/>) }
            </ul>
        );
    }
};  