import React from 'react'
import './Login.css'
import SakuraLogo from './assets/sakura_logo.png';
import { Button } from '@mui/material';
import { auth, provider } from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from "./reducer";

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        // firebase sign-in
        auth
        .signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result.user);
        })
        .catch((error) => alert(error.message));
    }

  return (
    <div className='login'>
        <div className="login__box">
        <div className="login__logo">
            <img src={SakuraLogo} style={{ width: "200px" }}></img>
            <div className="login__textlogo">
                <h1>桜漢字</h1>
                <h3>Sakura Kanji</h3>
            </div>
        </div>

        <Button type="submit" onClick={signIn}>
            Sign In
        </Button>
        </div>
    </div>
  )
}

export default Login