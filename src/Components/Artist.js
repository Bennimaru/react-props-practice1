import React from "react";

class Artist extends React.Component{
  render(){
    return(
    <div id="Artist">
      <img src={this.props.src}/>
      <h3>Name: {this.props.name}</h3>
      <h5>First Hit: {this.props.hit}</h5>
    </div>
    )
  }
}

export default Artist;
