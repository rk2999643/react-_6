import { useState } from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./Component/Home"
import Student from "./Component/Student"
import Contact from "./Component/Contact"
import Store from "./Component/Store"
import NewStudent from "./Component/NewStudent"
import EditStudent from "./Component/EditStudent"
import './Component/Style.css'


function App() {
    const [data,setData] = useState([
      {name: "Rohit", Age: 34, Course: "BAT ", Batch: "Jan"},
      {name: "Shubhman", Age: 24, Course: "BAT", Batch: "Jan"},
      {name: "Virat", Age: 33, Course: "BAT", Batch: "Jan"},
      {name: "Surya", Age: 31, Course: "BAT", Batch: "Jan"},
      {name: "Rahul", Age: 31, Course: "WK", Batch: "Jan"},
      {name: "Hadrik", Age: 30, Course: "ALL-ROUNDER", Batch: "Jan"},
      {name: "Raviendra", Age: 33, Course: "ALL-ROUNDER", Batch: "Jan"},
      {name: "Yuzi", Age: 29, Course: "SPIN", Batch: "Jan"},
      {name: "Shami", Age: 34, Course: "SWING", Batch: "Jan"},
      {name: "Siraj", Age: 30, Course: "SWING", Batch: "Jan"},
      {name: "Arshdeep", Age: 28, Course: "SWING", Batch: "Jan"},
    ])

  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/student" element={
        <Store.Provider value={{entries: data, entriesFun: setData}}>
          <Student/>
          </Store.Provider>
      } />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/editstudent" element={
        <Store.Provider value={{entries: data, entriesFun: setData}}>
          <EditStudent/>
          </Store.Provider>
      }/>
      <Route path="/newstudent" element={
        <Store.Provider value={{entries: data, entriesFun: setData}}>
          <NewStudent/>
          </Store.Provider>
      }/>    

    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
