import React from 'react'

class UserClass extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            count : 0,
            count2 : 2
        }
    }

    render(){
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