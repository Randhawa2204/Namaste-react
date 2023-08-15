import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
//COntext
import UserContext from "../utils/UserContext";
// const About = () => {
//     return (
//         <div>
//             <h1>About US</h1>
//             <User name={"Jack Kallis"} />
//             <UserClass name={"Mark Boutcher"} />
//         </div>
//     )
// }
class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor called")
  }

  componentDidMount(){
    console.log("Parent Did Mount Called")
  }
  render() {
    console.log("parent render called")
    return (
      <div>
        <h1>About US</h1>
        <UserContext.Consumer>{({loggedInUser}) => <h1>User : {loggedInUser}</h1>}</UserContext.Consumer>
        <User name={"Jack Kallis"} />
        <UserClass name={"Mark Boutcher"} />
      </div>

    );
  }
}

export default About;
