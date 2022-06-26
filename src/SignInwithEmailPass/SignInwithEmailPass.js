import { async } from "@firebase/util";
import React, { useState } from "react";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../utils/firebase.utils";

const defaultFormFields = {
  Email: "",
  Password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { Email, Password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("asf");

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        Email,
        Password
      );
      console.log(response);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);

    setFormFields({ ...formFields, [name]: value });

    console.log(formFields);
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="Email"
          value={Email}
        />
        <label>Password</label>
        <input
          type="Password"
          required
          onChange={handleChange}
          name="Password"
          value={Password}
        />
        <div className="buttons-container">
          <button type="submit">Sing In</button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
