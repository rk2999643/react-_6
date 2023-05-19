import React from "react";
import { Link } from 'react-router-dom'

function Nav(){
    return(
        <>
           <div className="main">
           <Link to='/' className="home">Home</Link>
           <Link to='/student' className="student">Student</Link>
           <Link to='/contact' className="contact">Contact</Link>
           <Link to='/newstudent' ></Link>
           <Link to='/editstudent' className="contact"></Link>
           
           </div>

        
        </>
    )
}
export default Nav