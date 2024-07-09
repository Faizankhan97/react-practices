import React from "react";

class UserClass extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      count: 0,
    }
  }
    render(){
      const {name, location, } = this.props;
        return (
          <div className="user-card">
            <h2>Name: {name} {this.state.count}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @faizikhan</h4>
          </div>
        );
    }
}

export default UserClass;