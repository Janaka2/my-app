import React, { Component } from 'react';
import TodoItem from './TodoItem'
class Todos extends Component {
 
  
   
    render() {
        //console.log(this.props.projects);
        let todoItems;
        if(this.props.todos){
            todoItems=this.props.todos.map(x => {
                //console.log(x);
                return (
                    <TodoItem key={x.title} todo={x}/>
                );
            });
        }

    return (
      <div className="Todos">
           <h3>Todo list </h3>
            {todoItems}
      </div>
      
    );
  }
}


export default Todos;
