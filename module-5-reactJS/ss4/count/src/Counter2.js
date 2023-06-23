import './App.css';
import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {UseIncrement} from "./UseIncrement";

export function Counter2() {
    const [count, increase] = UseIncrement(2);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => increase(2)}>Add 2</button>
        </div>
    );
}