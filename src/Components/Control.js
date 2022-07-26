import React, {Component} from "react";

class Control extends Component {
    render(){
      return (
        <ul>
            <li><a href="/create" onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode('create');
            }}>create</a></li>
            <li><a href="/update" onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode('update');
            }}>update</a></li>
            <li><input onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode('delete');
            }} type="button" value="delete"></input></li>
        </ul>
      );
    }
  }
  
export default Control;