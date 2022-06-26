import { async } from "@firebase/util";

import React, { useState } from "react";

// import {
//   createAuthUserWithEmailAndPassword,
//   createUserDocumentFromAuth,
// } from "../utils/firebase.utils";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/firebase.utils";

const defaultFormFields = {
  DisplayName: "",
  Email: "",
  Password: "",
  ConfirmPassword: "",
};
const NewUser = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { DisplayName, Email, Password, ConfirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        Email,
        Password
      );
      await createUserDocumentFromAuth(user, { DisplayName });
    } catch (error) {}
    resetFormFields();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);

    setFormFields({ ...formFields, [name]: value });

    // console.log(formFields);
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <label for=""></label>
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
        <label>Confirm Password</label>
        <input
          type="Password"
          required
          onChange={handleChange}
          name="ConfirmPassword"
          value={ConfirmPassword}
        />
        <button type="submit">Sing Up</button>
      </form>
    </div>
  );
};

export default NewUser;
