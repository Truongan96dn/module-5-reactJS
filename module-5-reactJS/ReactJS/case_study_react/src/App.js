import logo from './logo.svg';
import './App.css';
import {ServiceList} from "./components/service/ServiceList";
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
import {ContractList} from "./components/contract/ContractList";
import {CreateContract} from "./components/contract/CreateContract";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Home} from "./components/Home";



function App() {
  return (
    <>
        <Header/>
        <Routes>
            <Route path={"/body"} element={<ServiceList/>}/>
            <Route path={"/createService"} element={<CreateService/>}/>
            <Route path={"/updateService/:id"} element={<UpdateService/>}/>
            <Route path={"/customer"} element={<CustomerList/>}/>
            <Route path={"/createCustomer"} element={<CreateCustomer/>}/>
            <Route path={"/updateCustomer/:id"} element={<UpdateCustomer/>}/>
            <Route path={"/contract"} element={<ContractList/>}/>
            <Route path={"/createContract"} element={<CreateContract/>}/>
            <Route path={"/home"} element={<Home/>}/>
        </Routes>
        <ToastContainer/>
        <Footer/>
    </>
  );
}

export default App;
