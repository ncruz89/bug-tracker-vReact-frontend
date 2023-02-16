import React, { useReducer, useEffect } from "react";

import { validate } from "../../../util/validators";
import "./Input.styles.scss";

// Input reducer
// handles CHANGE and TOUCH actions
// CHANGE case updates value state along with validation
// TOUCH case updates isTouched state in input to know if user has focused on a certain input to avoid validation warnings before user focuses on input
const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

// Input component
// receives a variety of props
// handles input state
// renders different inputs based on elementType prop
// also renders validation error messages if activated
const Input = ({
  type,
  placeholder,
  rows,
  id,
  label,
  errorText,
  validators,
  className,
  onInput,
  initialValue,
  initialIsValid,
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue || "",
    isValid: initialIsValid || false,
    isTouched: false,
  });

  useEffect(() => {
    onInput(id, inputState.value, inputState.isValid);
  }, [id, inputState.value, inputState.isValid, onInput]);

  const changeHandler = (event) => {
    console.log("change event: ", event.target);
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  let element;
  switch (type) {
    case "text":
      element = (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={changeHandler}
          value={inputState.value}
          onBlur={touchHandler}
        />
      );
      break;
    case "assignee-select":
      element = (
        <select
          id={id}
          name={id}
          onChange={changeHandler}
          value={inputState.value}
          className={className}
        >
          <option value="Nathan">Nathan</option>
          <option value="Nina">Nina</option>
        </select>
      );
      break;
    case "severity-select":
      element = (
        <select
          id={id}
          name={id}
          onChange={changeHandler}
          value={inputState.value}
          className={className}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="Critical">Critical</option>
        </select>
      );
      break;
    case "bug-status":
      element = (
        <select
          id={id}
          name={id}
          onChange={changeHandler}
          value={inputState.value}
          className={className}
        >
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>
      );
      break;
    default:
      element = (
        <textarea
          id={id}
          rows={rows || 3}
          onChange={changeHandler}
          value={inputState.value}
          placeholder={placeholder}
        />
      );
  }

  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      } `}
    >
      <label htmlFor={id}>{label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{errorText}</p>}
    </div>
  );
};

export default Input;
