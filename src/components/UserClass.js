import React from 'react'

class UserClass extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            count : 0,
            count2 : 2
        }
        console.log("Child constructor called")
    }

    componentDidMount(){
        console.log("Child DidMount called")
    }

    componentDidUpdate(){
        console.log("Will be called on each re-render")
    }

    componentWillUnmount(){
        console.log("Will be called when component leaves the UI")
    }
    render(){
        console.log("Child render called")
        return (
            <div className="about-card">
            <h2>{this.props.name}</h2>
            <h2>Count : {this.state.count}</h2>
            <h2>Count2 : {this.state.count2}</h2>
            <button onClick={() => {
                this.setState({
                    count : this.state.count + 1
                })
            }}>Increase Count</button>
            <h3>Location</h3>
            <h3>Mail Id</h3>
        </div>
        )
    }
}

export default UserClass;