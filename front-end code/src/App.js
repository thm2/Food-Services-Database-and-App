import './App.css';
import Header from './components/Header';
import React, { useEffect, useState } from 'react'
import Footer from './components/Footer';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Admin from './components/Admin';
import Create from './components/Create';
import Updelete from './components/Updelete';
import MyOrders from './components/MyOrders';
import Login from './components/Login';
import CreateUser from './components/CreateUser';



function App() {
  const [userID, setUserID] = useState("")

  return (
    <Router>
      <Header userID={userID} getUserID={(u)=>setUserID(u)}/>
      <Routes>
        <Route exact path="/" element={<Home userID={userID}/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/updelete/:id" element={<Updelete/>}/>
        <Route path="/myOrders" element={<MyOrders userID={userID}/>}/>
        <Route path="/login" element={<Login getUserID={(u)=>setUserID(u)}/>}/>
        <Route path="/createUser" element={<CreateUser/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
