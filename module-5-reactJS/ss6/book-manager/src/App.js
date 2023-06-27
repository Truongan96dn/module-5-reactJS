
import './App.css';
import React from "react";
import {Routes} from 'react-router-dom'
import {Route} from "react-router";
import {Books} from "./components/Books";
import {CreateBook} from "./components/CreateBook";
import {UpdateBook} from "./components/UpdateBook";
function App() {
  return (
   <>
      <Routes>
          <Route path="/" element={<Books/>}/>
          <Route path="/create" element={<CreateBook/>}/>
          <Route path="/update/:id" element={<UpdateBook/>}/>
      </Routes>
   </>
  );
}

export default App;
