import React, {Component} from 'react';
import {Outlet} from "react-router-dom";
import Profile from './ProfileClass';
import ProfileFunctionalComponent from './Profile';

// const About2 = () =>{
//     return (
//         <>
//             <div>
//                 <h1>About Us</h1>
//                 <p>This is Namaste React Course Chap-08 - Finding the Path!!</p>
//                 {/* <Outlet /> */}
//                 <ProfileFunctionalComponent name={"Pawan"} />
//                 <Profile name={"PawanClass"} xyz={"abc"} />
//             </div>
//         </>
//     )
// }

class About extends Component {

    constructor(props){
        super(props);
        console.log("Parent - constructor");
    }

    componentDidMount(){
        // Best Place to make an API Calls
        console.log("Parent - componentDidMount");
    }

    render(){
        console.log("Parent - render");
        return (
            <>
                <div>
                    <h1>About Us</h1>
                    <p>This is Namaste React Course Chap-08 - Finding the Path!!</p>
                    {/* <Outlet /> */}
                    {/* <ProfileFunctionalComponent name={"Pawan"} /> */}
                    <Profile name={"First Child Class"} xyz={"abc"} />
                    <Profile name={"Second Child Class"} xyz={"abc"} />
                </div>
            </>
        )
    }
}

export default About;

/**
 * Parent - constructor
 * Parent - render
 *   1. child - constructorFirst Child Class
 *      child - renderFirst Child Class
 *   2. child - constructorSecond Child Class
 *      child - renderSecond Child Class
 *   child - componentDidMountFirst Child Class
 *   child - componentDidMountSecond Child Class
 *   Parent - componentDidMount
 *   
 * 
 */