import React from 'react'
import DefaultScreen from "../src/DefaultScreen"
import Sign_in from './components/Sign_in';
import Sign_up from './components/Sign_up';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
   
    <>
    <Router>
    <Routes>
      <Route path='/' element={<DefaultScreen />} />
      <Route path='/sign_in' element={<Sign_in />} />
      <Route path='/sign_up' element={<Sign_up />} />
      </Routes>
      </Router>
    </>

 

  );
}

export default App;
