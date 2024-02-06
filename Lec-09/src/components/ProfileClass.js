import React from 'react';

class ProfileClass extends React.Component {

    constructor(props){
        super(props);
        // Create State
        this.state = {
            count : 0,
            count2 : 0,
        };
        console.log("Child - constructor" + this.props.name);
    }

    componentDidMount() {
        // API Calls
        console.log("Child - componentDidMount" + this.props.name)
    }

    render() {
        const {count} = this.state;
        console.log("Child - render" + this.props.name)
        return (
            <div>
                <h1> Profile Class Component {this.props.name}</h1>
                <h2>XYZ : {this.props.xyz}</h2>
                <h2>Count : {count}</h2>
                <button onClick={()=>{
                    // We donot mutate State Durectly
                    // Never do this.state = something
                    this.setState({count: count + 1,
                        count2: 2})
                }}>setCount</button>
            </div> 
        )
    }
}

export default ProfileClass;