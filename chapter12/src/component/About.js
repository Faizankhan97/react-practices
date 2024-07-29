import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {

    return (
      <div>
        <h1>About Class Component</h1>
        <div>LoggedIn User</div>
        <UserContext.Consumer>{({ loggedInUser }) => <h1 className="font-bold">{loggedInUser}</h1>}</UserContext.Consumer>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name={"First"} location={"Dehradun Class"} />
      </div>
    );
  }
}

export default About;
