import React, { Component } from 'react';
import ProjecItem from './ProjectItem'
class Container extends Component {
 
  
    deleteProject(id){
        this.props.onDelete(id);
    }
    render() {
        //console.log(this.props.projects);
        let projectItems;
        if(this.props.projects){
            projectItems=this.props.projects.map(x => {
                //console.log(x);
                return (
                    <ProjecItem onDelete={this.deleteProject.bind(this)} key={x.title} project={x}/>
                );
            });
        }

    return (
      <div className="Container">
            {projectItems}
      </div>
      
    );
  }
}

export default Container;
