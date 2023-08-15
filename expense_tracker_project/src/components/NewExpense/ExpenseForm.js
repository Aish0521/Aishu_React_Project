import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //   const [inputValues, setInputValues] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setInputValues((prevState) => ({
    //   ...prevState,
    //   enteredTitle: e.target.value,
    // }));
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setInputValues((prevState) => ({
    //     ...prevState,
    //     enteredAmount: e.target.value,
    //   }));
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // setInputValues((prevState) => ({
    //     ...prevState,
    //     enteredDate: e.target.value,
    //   }));
  };

  //   const inputChangeHandler = (identifier, value) => {
  //     if (identifier === "title") {
  //       setEnteredTitle(value);
  //     } else if (identifier === "amount") {
  //       setEnteredAmount(value);
  //     } else {
  //       setEnteredDate(value);
  //     }
  //   };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    console.log(expenseData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            // onChange={(e) => {
            //   inputChangeHandler("title", e.target.value);
            // }}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
            // onChange={(e) => {
            //   inputChangeHandler("amount", e.target.value);
            // }}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
            // onChange={(e) => {
            //   inputChangeHandler("date", e.target.value);
            // }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onStopEditing}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
