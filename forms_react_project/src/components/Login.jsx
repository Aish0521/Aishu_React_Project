import { useRef, useState} from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();

const [emailInvalid, setEmailInvalid] = useState(false)
console.log(emailInvalid)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    console.log(enteredEmail, enteredPassword);
    const emaiIsValid = enteredEmail.includes('@')
    if(!emaiIsValid) {
      setEmailInvalid(true)
      return;
    }
    setEmailInvalid(false)

  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
<div className="control-error">{emailInvalid && <p>Please enter valid email</p>}</div>
         
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
