import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionsCreaters } from "../state/Index";

function Reducer() {
  const amount = useSelector((state) => state.amount);
  const dispatch = useDispatch();
  const actions = bindActionCreators(ActionsCreaters, dispatch);
  return (
    <div className="section">
      <div className="container">
        <p>Your Current Balance : {amount}</p>
        <button className="btn hireme-btn" onClick={()=>actions.IncMoneyAction(1)}>+</button>
        <p>Update your balance</p>
        <button className="btn hireme-btn" onClick={()=>{actions.DecMoneyAction(1)}}>-</button>
      </div>
    </div>
  );
}

export default Reducer;
