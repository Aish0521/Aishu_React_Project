

// import Input from "./Input";
// import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
// import { useInput } from "../hooks/useInput";

// export default function Login() {
//   const {
//     value: emailValue,
//     handleInputChange: handleEmailChange,
//     handleInputBlur: handleEmailBlur,
//     errorValue: emailHasError

//   } = useInput("", (val) => isEmail(val) && isNotEmpty(val));
//   console.log(emailValue)
// console.log(handleEmailChange)
//   const {
//     value: passwordValue,
//     handleInputChange: handlePasswordChange,
//     handleInputBlur: handlePasswordBlur,
//     errorValue: passwordHasError
//   } = useInput("", (val) => hasMinLength(val, 6) && isNotEmpty(val));
//   // const [enteredValues, setEnteredValues] = useState({
//   //   email: "",
//   //   password: "",
//   // });
//   // const [didEdit, setDidEdit] = useState({
//   //   email: false,
//   //   password: false,
//   // });
//   // const emailIsValid = didEdit.email && !enteredValues.email.includes("@");
//   // const emailIsValid =
//   //   didEdit.email &&
//   //   !isEmail(enteredValues.email) &&
//   //   !isNotEmpty(enteredValues.email);

//   // const passwordIsValid = didEdit.password && !enteredValues.password.trim().length < 6
//   // const passwordIsValid =
//   //   didEdit.password &&
//   //   !hasMinLength(enteredValues.email, 6) &&
//   //   !isNotEmpty(enteredValues.password);

//   // console.log(passwordIsValid);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("submitted");
//     // console.log(enteredValues);
//     //can send to backend the submitted data
//   };
//   // const handleValuesChange = (identifier, value) => {
//   //   setEnteredValues((prevState) => ({
//   //     ...prevState,
//   //     [identifier]: value,
//   //   }));
//   //   setDidEdit((prevState) => ({
//   //     ...prevState,
//   //     [identifier]: false,
//   //   }));
//   // };
//   // const handleValuesBlur = (identifier) => {
//   //   setDidEdit((prevState) => ({
//   //     ...prevState,
//   //     [identifier]: true,
//   //   }));
//   // };
//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>

//       <div className="control-row">
//         <Input
//           id="email"
//           type="email"
//           name="email"
//           onChange={handleEmailChange}
//           onBlur={handleEmailBlur}
//           //  onChange={(e) => handleValuesChange("email", e.target.value)}
//           value={emailValue}
//           //  onBlur={(e) => handleValuesBlur("email")}
//           error={emailHasError && "Please enter a valid email"}
//         />
//         <Input
//           id="password"
//           type="password"
//           name="password"
//           onChange={handlePasswordChange}
//           value={passwordValue}
//           onBlur={handlePasswordBlur}
//           error={passwordHasError && "Please enter a valid password"}
//         />
//       </div>

//       <p className="form-actions">
//         <button className="button button-flat">Reset</button>
//         <button className="button">Login</button>
//       </p>
//     </form>
//   );
// }

import Input from './Input.jsx';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';
import { useInput } from '../hooks/useInput.js';

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));
  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput('', (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }

    console.log(emailValue, passwordValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && 'Please enter a valid email!'}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          value={passwordValue}
          error={passwordHasError && 'Please enter a valid password!'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
