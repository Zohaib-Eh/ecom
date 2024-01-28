import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailandPassword
} from "../../utils/firebase/firebase.utils";
import "./sign-in-form.styles.scss";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultformFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultformFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    try{
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
      alert('Logged in with Google')
    }catch(error){
      if(error.code === 'auth/popup-closed-by-user'){
        alert('Google Log In Failed, Pop-Up Closed')
      }
    }
  };

  const resetFormFields = () => {
    setFormFields(defaultformFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      resetFormFields();
      const response = await signInAuthUserWithEmailandPassword(
        email,
        password
      );
      alert("Signed In With Email and Password");
    } catch (error) {
        if (error.code === "auth/invalid-credential"){
            alert('Incorrect Email or Password')
        }
        console.log(error)
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span> Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type='button' buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
