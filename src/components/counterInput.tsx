import React from "react";
import { useDispatch } from "react-redux";
import { increamentAction , decreamentAction} from './action';


const CounterInput: React.FC = () => {

    const Dispatch = useDispatch();
  return (
    <div>
      <button onClick = {()=> Dispatch(increamentAction())}>+</button>
      <button  onClick = {()=> Dispatch(decreamentAction())}>-</button>
    </div>
  );
};

export default CounterInput;
