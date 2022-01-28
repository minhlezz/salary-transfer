import { useReducer } from "react";

const initialInputState = {
  value: "",
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value };
  }
};

const useInput = () => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueChangeHandler = (event) => {
    console.log(event.target.value);
    dispatch({ type: "INPUT", value: event.target.value });
  };

  return {
    value: inputState.value,
    valueChangeHandler,
  };
};

export default useInput;
