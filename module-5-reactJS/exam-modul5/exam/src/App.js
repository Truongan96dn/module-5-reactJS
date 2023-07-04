import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Routes,Route} from "react-router-dom"
import 'bootstrap/dist/js/bootstrap.bundle';
import {OrderList} from "./components/OrderList";
import {CreateOrder} from "./components/CreateOrder";



function App() {
  return (
   <>
       <Routes>
           <Route path={"/"} element={<OrderList/>}/>
           <Route path={"/create"} element={<CreateOrder/>}/>
           
       </Routes>

   </>
  );
}

export default App;
