import React from "react";
import { useSelector } from "react-redux";

const CounterInput: React.FC = () => {
    const counter = useSelector( (state: any) => state.counter)
  return (
    <div>
      <h3> your counter is : { counter} </h3>
    </div>
  );
};

export default CounterInput;
