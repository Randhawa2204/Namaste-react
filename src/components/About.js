import User from "./User";
import UserClass from "./UserClass"; 

const About = () => {
    return (
        <div>
            <h1>About US</h1>
            <User name={"Jack Kallis"} />
            <UserClass name={"Mark Boutcher"} />
        </div>
    )
}

export default About;