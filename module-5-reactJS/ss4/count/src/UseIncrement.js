import './App.css';
import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export function UseIncrement(addAmount) {
    const [count, setCount] = useState(0);
    function increase(addAmount) {
        setCount(count + addAmount);

    }
    return[count,increase]

}