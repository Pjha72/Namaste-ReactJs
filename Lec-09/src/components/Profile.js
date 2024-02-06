import {useState,useEffect} from 'react';

const Profile = ({name}) =>{
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    
    useEffect(()=>{
        // API Call
        // console.log("useEffect")
    });
    // console.log("render function");
    return (
        <>
         <div>
            <h2>Profile Component {name}</h2>
            <h2>Count : {count} + {count2}</h2>
            <button onClick={()=>{
                setCount(1)
                setCount2(2)
            }}>Count</button>
         </div>
        </>
    )
}
export default Profile;