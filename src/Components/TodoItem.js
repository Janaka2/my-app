import React, { Component } from 'react';

class TodoItem extends Component {

    
  render() {
      //console.log('Prject Item'+this.props);
    return (
      <li className="TodoItem">          
          {this.props.todo.title}
      </li>
      
    );
  }
}


export default TodoItem;
