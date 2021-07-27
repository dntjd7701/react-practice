import React, { Component } from 'react';
import ListItem from './ListItem';

export default  class FoodList extends Component{
    render(){
        console.log(this.props.foods);

        // <ListItem/> 는 함수로 변환되기 때문에 아래와 같은 방식으로 사용이 가능하다. 
        // return 부분에 구문을 쓸 수 없기 때문에 아래와 같이 만들었다.
        const foods = [ <ListItem/>, <ListItem/>, <ListItem/> ];
        this.props.foods.forEach(function(food, index){
            foods[index] = <ListItem key={food.no} name={food.name} quantity={food.quantity} />;
        });

        

        return (
            <ul>
                { foods }
            </ul>
        );
    }
};  