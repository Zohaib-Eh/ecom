import {useEffect} from 'react';
import { getRedirectResult} from 'firebase/auth';

import { auth, signInWithGooglePopup , createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils"

const SignIn = () => {

    useEffect(() => {
        const handleRedirect = async() => {
        const response = await getRedirectResult(auth)
        if (response){
            const userDocRef = await createUserDocumentFromAuth(response.user)
        }
        };
        handleRedirect();
    },[]);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    };

    return (
        <div> 
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>
                Sign In with Google Popup
            </button>
            <button onClick={signInWithGoogleRedirect}>
                Sign In with Google Redirect
            </button>
        </div>
    )
}

export default SignIn