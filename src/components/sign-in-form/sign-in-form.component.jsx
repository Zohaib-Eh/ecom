import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailandPassword
} from "../../utils/firebase/firebase.utils";
import {SignInContainer,ButtonsContainer,SignInHeader} from "./sign-in-form.styles.jsx";
import FormInput from "../form-input/form-input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";



const defaultformFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultformFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    try{
      await signInWithGooglePopup();
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
      await signInAuthUserWithEmailandPassword(
        email,
        password
      );
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
    <SignInContainer>
      <SignInHeader>Already have an account?</SignInHeader>
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
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
