import React, { useState } from "react";
import "./calculator.css";
import { Icon } from '@iconify/react';

const Calculator = () => {

  let [val,setVal]=useState("0")
  let [expression,setexpression]=useState("")
  
  let handleCal=(ele)=>{
    if (ele === "C") {
      setVal("0");
      setexpression("");
			
    }
    else if (ele === "=") {
      setVal(eval(expression));
      setexpression(val);
    }
    else if(ele === "B"){
      setexpression(expression.slice(0, -1));
      setVal(expression.slice(0, -1))
    }
    else {
      setexpression(expression+ele);
      console.log(expression+ele)
      setVal(expression+ele);
    }
  }
  return (
    <div style={{position:'relative',width: '100%',height:'100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'}}>
      <span>Simple Calculator</span>
      <div className="main-container">
      <div className="display">{val}</div>
        <div className="row">
          <button type="button" onClick={()=>handleCal("C")}className="col">C</button>
          <button type="button" onClick={()=>handleCal("%")}className="col">%</button>
          <button type="button" onClick={()=>handleCal("B")}className="col"><Icon icon="bx:arrow-back" color="black" /></button>
          <button type="button" onClick={()=>handleCal("/")}className="col">/</button>
        </div>
        <div className="row">
          <button type="button" onClick={()=>handleCal("7")}className="col">7</button>
          <button type="button" onClick={()=>handleCal("8")}className="col">8</button>
          <button type="button" onClick={()=>handleCal("9")}className="col">9</button>
          <button type="button" onClick={()=>handleCal("*")}className="col">x</button>
        </div>
        <div className="row">
          <button type="button" onClick={()=>handleCal("4")}className="col">4</button>
          <button type="button" onClick={()=>handleCal("5")}className="col">5</button>
          <button type="button" onClick={()=>handleCal("6")}className="col">6</button>
          <button type="button" onClick={()=>handleCal("-")}className="col">-</button>
        </div>
        <div className="row">
          <button type="button" onClick={()=>handleCal("1")}className="col">1</button>
          <button type="button" onClick={()=>handleCal("2")}className="col">2</button>
          <button type="button" onClick={()=>handleCal("3")}className="col">3</button>
          <button type="button" onClick={()=>handleCal("+")}className="col">+</button>
        </div>
        <div className="row">
          <button type="button" onClick={()=>handleCal("00")}className="col">00</button>
          <button type="button" onClick={()=>handleCal("0")}className="col">0</button>
          <button type="button" onClick={()=>handleCal(".")}className="col">.</button>
          <button type="button" onClick={()=>handleCal("=")}className="col">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
