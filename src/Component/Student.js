import React, { useContext } from "react";
import Store from "./Store";
import { Link,useNavigate } from 'react-router-dom'
import Nav from "./Nav";




function Student(){
    const ContextData = useContext(Store);
    const Navi = useNavigate();

    return(
        <>
           <Nav/>
           <h1>Students Detail</h1>
           <button onClick={()=> {Navi('/newstudent')}} className="add">Add new student</button>
           <table border={1}  className="table">
              <thead  className="th">
                <tr>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>COURSE</th>
                    <th>BATCH</th>
                    <th>CHANGE</th>
                </tr>
              </thead>
              <tbody >
                {ContextData.entries.map((item,index) =>{
                  return(
                    <tr key={index}>
                    <td >{item.name}</td>
                    <td>{item.Age}</td>
                    <td>{item.Course}</td>
                    <td>{item.Batch}</td>
                    <td><Link to='/editstudent' state={{data: index}}>Edit</Link></td>
                  </tr>
                  )

                })}
                
               
              </tbody>
           </table>
        </>
    )
}
export default Student;