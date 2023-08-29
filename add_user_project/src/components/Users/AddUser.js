import React, { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const initialValues = {
    username: "",
    age: "",
  };
  const [enteredUserDetails, setEnteredUserDetails] = useState(initialValues);
  const [error, setError] = useState();

  const usernameHandler = (e) => {
    setEnteredUserDetails((prevState) => {
      return { ...prevState, username: e.target.value };
    });
  };

  const ageHandler = (e) => {
    setEnteredUserDetails((prevState) => {
      return { ...prevState, age: +e.target.value };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      enteredUserDetails.username.toString().trim().length === 0 ||
      enteredUserDetails.age.toString().trim().length === 0
    ) {
      setError({
        title: "Invalid input!",
        message: "Please enter valid name and age (Non empty values)",
      });
      return;
    }
    if (enteredUserDetails.age < 1) {
      setError({
        title: "Invalid age!",
        message: "Please enter valid a age (> 0)",
      });
      return;
    }
    props.onAddUser(enteredUserDetails.username, enteredUserDetails.age);
    setEnteredUserDetails(initialValues);
    setError(false);
    console.log(enteredUserDetails);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameHandler}
            value={enteredUserDetails.username}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageHandler}
            value={enteredUserDetails.age}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
