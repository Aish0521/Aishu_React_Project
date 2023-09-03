import React, { useRef, useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
//   const initialValues = {
//     username: "",
//     age: "",
//   };
  //   const [enteredUserDetails, setEnteredUserDetails] = useState(initialValues);
  const [error, setError] = useState();

  //   const usernameHandler = (e) => {
  //     setEnteredUserDetails((prevState) => {
  //       return { ...prevState, username: e.target.value };
  //     });
  //   };

  //   const ageHandler = (e) => {
  //     setEnteredUserDetails((prevState) => {
  //       return { ...prevState, age: +e.target.value };
  //     });
  //   };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(nameInputRef);
    const eneteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (
      //   enteredUserDetails.username.toString().trim().length === 0 ||
      //   enteredUserDetails.age.toString().trim().length === 0
      eneteredName.toString().trim().length === 0 ||
      enteredUserAge.toString().trim().length === 0 //ref approach to avoid setting values state in every keystroke
    ) {
      setError({
        title: "Invalid input!",
        message: "Please enter valid name and age (Non empty values)",
      });
      return;
    }
    if (
      // enteredUserDetails.age < 1
      enteredUserAge < 1
    ) {
      setError({
        title: "Invalid age!",
        message: "Please enter valid a age (> 0)",
      });
      return;
    }
    props.onAddUser(
      // enteredUserDetails.username, enteredUserDetails.age
      eneteredName,
      enteredUserAge
    );
    nameInputRef.current.value=''//Reset logic, we should avoid manipulating DOM usually but in
                                // this case it's only resetting value, so using this approach 
    ageInputRef.current.value=''
    // setEnteredUserDetails(initialValues);
    setError(false);
    // console.log(enteredUserDetails);
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
            // onChange={usernameHandler}
            // value={enteredUserDetails.username}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // onChange={ageHandler}
            // value={enteredUserDetails.age}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
