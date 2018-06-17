import React, { Component } from 'react';
import Container from './Components/Container';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import uuid from 'uuid';
import $ from 'jquery';


class App extends Component {
constructor(){
  super();
  this.state={
          projects :[],
          todos:[]
        }
      }
componentWillMount(){
  this.getTodos();
  this.getProject();
}

handleAddProject(project){
//console.log(project);
let projects=this.state.projects;
projects.push(project);
this.setState({projects:projects});

}

handleDeleteProject(id){
let projects=this.state.projects;
let index=projects.findIndex(x=> x.id===id);
projects.splice(index,1);
this.setState({projects:projects});
}

getTodos(){
$.ajax({
  url:'https://jsonplaceholder.typicode.com/todos',
  dataType:'json',
  cache:false,
  success:function(data){
 this.setState({todos:data},function(){
   console.log(this.state);
 });

  }.bind(this),
  error:function(xhr,status,err){
    console.log(err);
  }
});
}

getProject(){
  this.setState({projects:[
    {
      id:uuid.v4(),
      title:'Bussiness Websites',
      category:'Web Design'
    },
    {
      id:uuid.v4(),
      title:'Shoping Cart Websites',
      category:'Web Develpment'
    },
    {
      id:uuid.v4(),
      title:'Ecormmers Shoping Cart',
      category:'Mobile Development'
    }
  ]});


}
componentDidMount(){
this.getTodos();

}

render() {
    return (
      <div className="App">
         <AddProject addProject={this.handleAddProject.bind(this)}/>
        My App
         <Container projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
      <hr/>
      <Todos todos={this.state.todos}/>
      </div>
      
    );
  }
}

export default App;
