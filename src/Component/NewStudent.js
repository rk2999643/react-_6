import React,{useContext} from "react";
import Store from "./Store";
import {useNavigate} from 'react-router-dom';
import Nav from "./Nav";

function NewStudent(){
    const ContextData =useContext(Store);
    const navi = useNavigate();
    const NewObj = {
        name:'',
        Age:'',
        Course:'',
        Batch:''
    }
    const handleChange =(e) =>{
        NewObj[e.target.name] = e.target.value;

    }
    const handleClick = ()=>{
        ContextData.entries.push(NewObj);
        navi('/student')
    }
    return(
        <>
          <Nav/><br/>
          <input name='name' placeholder="Enter Name" onChange={handleChange} className="name"/>
          <input name='Age' placeholder="Enter Age" onChange={handleChange} className="name"/><br/>
          <input name='Course' placeholder="Enter Course" onChange={handleChange} className="name"/>
          <input name='Batch' placeholder="Enter Batch" onChange={handleChange} className="name"/><br/>
          <button onClick={handleClick} className="update">Add student</button>
        </>
    )
}
export default NewStudent;