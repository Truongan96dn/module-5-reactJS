import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Counter1} from "./Counter1";
import {Counter2} from "./Counter2";
function App() {
    // const [count, setCount] = useState(0)
    // const [count2, setCount2] = useState(0)
    // const handleAdd = () => {
    //     setCount(prevState => prevState + 1);
    // }
    // const handleAdd2 = () => {
    //     setCount2(prevState => prevState + 2);
    // }
    // return (
    //     <>
    //         <h1>Count :{count}</h1>
    //         <button className="btn btn-warning" onClick={() => handleAdd()}>Add 1</button>
    //         <h1>Count :{count2}</h1>
    //         <button className="btn btn-danger" onClick={() => handleAdd2()}>Add 2</button>
    //     </>
    // );
    return (
        <div>
            <Counter1/>
            <Counter2/>
        </div>
    );
}

export default App;
