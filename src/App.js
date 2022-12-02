import './App.css';
import React from 'react';
import { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import {addNum, minusNum} from "./redux/modules/counter"

function App() {
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();
  const counterStore = useSelector((state)=> state.counter.number)
  
  const onChangeHandler = (e) => {
    setNumber(+e.target.value)
  }

  return (
    <div className="App">
      
      <input 
      type="number"
      onChange={onChangeHandler}
      />

      {counterStore}
      <button 
      onClick={()=>
        {
          dispatch(addNum(number))
        }}
      >
        증가
      </button>
      <button 
      onClick={()=>
        {
          dispatch(minusNum(number))
        }}
      >
        감소
      </button>
    </div>
  );
}

export default App;
