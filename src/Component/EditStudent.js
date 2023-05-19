import React, {useContext} from "react";
import Store from "./Store";
import {useLocation,useNavigate} from 'react-router-dom';
import Nav from "./Nav";

function EditStudent(){
    const ContextData = useContext(Store);
    const Navi = useNavigate();
    const index = useLocation().state.data;
    console.log(ContextData);
    console.log(index);

    const updateObj = {
        name: ContextData.entries[index].name,
        Age: ContextData.entries[index].Age,
        Course: ContextData.entries[index].Course,
        Batch: ContextData.entries[index].Batch,
    }
    const handleChange=(e)=>{
        updateObj[e.target.name] = e.target.value;

    }
    const handleUpdate =()=>{
    ContextData.entries[index] = updateObj;
    Navi(-1)
    }
    return(
        <>
          <Nav/>
          <h1>This is Edit Student Component</h1><br/><br/>
          <input type='text' name='name' placeholder={ContextData.entries[index].name} onChange={handleChange} className="name"/>
          <input type='text' name='Age' placeholder={ContextData.entries[index].Age} onChange={handleChange} className="name"/><br/>
          <input type='text' name='Course' placeholder={ContextData.entries[index].Course} onChange={handleChange} className="name"/>
          <input type='text' name='Batch' placeholder={ContextData.entries[index].Batch} onChange={handleChange} className="name"/><br/>
          <button onClick={handleUpdate} className="update">Update</button>
        </>
    )

}
export default EditStudent;