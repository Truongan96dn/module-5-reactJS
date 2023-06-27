import logo from './logo.svg';
import './App.css';
import {Body} from "./components/Body";
import {Routes,Route}from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {CreateService} from "./components/service/CreateService";
import React from "react";
import {UpdateService} from "./components/service/UpdateService";
import {CustomerList} from "./components/customer/CustomerList";
import {CreateCustomer} from "./components/customer/CreateCustomer";
import {UpdateCustomer} from "./components/customer/UpdateCustomer";

function App() {
  return (
    <>
        <Header/>
        <Routes>
            <Route path={"/body"} element={<Body/>}/>
            <Route path={"/createService"} element={<CreateService/>}/>
            <Route path={"/updateService"} element={<UpdateService/>}/>
            <Route path={"/customer"} element={<CustomerList/>}/>
            <Route path={"/createCustomer"} element={<CreateCustomer/>}/>
            <Route path={"/updateCustomer"} element={<UpdateCustomer/>}/>

        </Routes>
        <Footer/>
    </>
  );
}

export default App;
