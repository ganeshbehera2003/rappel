import React,{useState} from "react";

export const StateExample = () =>{
    let [data,setData] = useState('Hello! There');
    const updateDataHandler = () =>{
        setData('Welcome To React');
    }
    return (
        <div>
        <h1>{data}</h1>
        <button onClick={updateDataHandler}>Update</button>
        </div>
    );
}


// export default StateExample
// export default function StateExample{

// }