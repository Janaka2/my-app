import React, { Component } from 'react';

class ProjectItem extends Component {

    deleteProject(id){
        console.log();
        this.props.onDelete(id);
    }
  render() {
      //console.log('Prject Item'+this.props);
    return (
      <li className="ProjectItem">          
          {this.props.project.title}--{this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this,this.props.project.id)}>X</a>
      </li>
      
    );
  }
}


export default ProjectItem;
