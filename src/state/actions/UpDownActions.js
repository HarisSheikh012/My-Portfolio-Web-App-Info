export const IncMoneyAction = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "INCREMENT",
      payload: amount,
    });
  };
};

export const DecMoneyAction = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "DECREMENT",
      payload: amount,
    });
  };
};
