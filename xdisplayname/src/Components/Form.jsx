import React from "react";
import styles from "./Form.module.css"
import { useState } from "react";



const Form = ()=>{


    const [inputvalue1,setinputvalue1] = useState('');

    const [inputvalue2,setinputvalue2] = useState('');

    const [submit,setsubmit] = useState(null)

const formSubmit =(e)=>{
    e.preventDefault(); 
    
    setsubmit({inputvalue1,inputvalue2})
}



const handleChange1 = (e)=>{

    setinputvalue1(e.target.value)

 }

 const handleChange2 = (e)=>{


    setinputvalue2(e.target.value)

 }

//  console.log("state1",inputvalue1)
//  console.log("state2",inputvalue2)


    return (
        <>
<form onSubmit={formSubmit}>

<h1> Full Name Display</h1>



<div className={styles.wrapper1}> 
<p>First Name :  </p>
<input type="text" placeholder="Enter first name..."  value={inputvalue1} onChange = {handleChange1} required/>
</div>
<div className={styles.wrapper1}> 
<p>Last Name :  </p>
<input type="text" placeholder="Enter last name..."  value={inputvalue2} onChange = {handleChange2} required/>
</div>

<button type="submit" >Submit</button>


</form>

{ submit? (
    <p>Full Name: {submit.inputvalue1} {submit.inputvalue2} </p>
    ) : ""
    }
    </>
    )
}

export default Form;