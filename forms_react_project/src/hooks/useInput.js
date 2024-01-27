// import { useState } from "react";

// export const useInput = (defaultValue, validationFn) => {
//   const [enteredValue, setEnteredValue] = useState(defaultValue);
//   const [didEdit, setDidEdit] = useState(false);
//   function handleValuesChange(e) {
//     setEnteredValue(e.target.value);
//     setDidEdit(false);
//   }
//   function handleValuesBlur() {
//     setDidEdit(true);
//   }
//   const valueIsValid = validationFn(enteredValue);
//   return {
//     value: enteredValue,
//     handleValuesChange,
//     handleValuesBlur,
//     errorValue: didEdit && !valueIsValid,
//   };
// };

import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  function handleInputChange(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
  };
}
