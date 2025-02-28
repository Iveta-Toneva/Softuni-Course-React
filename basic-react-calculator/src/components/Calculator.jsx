import './Calculator.css';
import { useState } from 'react';
export default function Calculator() {

    const [data, setData] = useState("");


    function add(e) {
        
        let value = e.currentTarget.textContent;
        if (value == 'x') {
            value = '*';
        } else if (value == '÷') {
            value = '/';
        }
        setData(data + value);

    }

    function calc() {
        const result = eval(data);
        setData(result);
    }

    return (
        <>
            <h1>Calculator</h1>
            <div className="calculator">
                <div className="result">{data}</div>
                <button onClick={add}>7</button>
                <button onClick={add}>8</button>
                <button onClick={add}>9</button>
                <button onClick={add}>÷</button>
                <button onClick={add}>4</button>
                <button onClick={add}>5</button>
                <button onClick={add}>6</button>
                <button onClick={add}>x</button>
                <button onClick={add}>1</button>
                <button onClick={add}>2</button>
                <button onClick={add}>3</button>
                <button onClick={add}>-</button>
                <button onClick={add}>0</button>
                <button onClick={add}>.</button>
                <button onClick={calc}>=</button>
                <button onClick={add}>+</button>
            </div>
        </>

    )
}