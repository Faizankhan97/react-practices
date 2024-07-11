import axios from "axios";
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy",
      },
    };
    console.log(this.props.name + " Constructor");
  }
  async componentDidMount() {
    try {
      const res = await axios.get("https://api.github.com/users/Faizankhan97");
      this.setState({
        userInfo: res?.data,
      });
      console.log(res, "res");
    } catch (error) {
      console.log(error);
    }
  }
  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }
  render() {
    console.log(this.props.name + " Render");
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h2>Name: {this?.state?.userInfo?.name}</h2>
        <h3>Location: {this?.state?.userInfo?.location}</h3>
        <img
          src={this?.state?.userInfo?.avatar_url}
          style={{ width: 100, height: 100 }}
        />
        <h4>Contact: @faizikhan</h4>
      </div>
    );
  }
}

export default UserClass;
