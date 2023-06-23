import './App.css';
import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {UseIncrement} from "./UseIncrement";

export function Counter1() {
    const [count,increase] = UseIncrement(1);
    return(
        <div>
            <p> Count: {count}</p>
            <button onClick={()=> increase(1)}>Add 1</button>
        </div>
    )
}