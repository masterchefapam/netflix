import React,{useRef} from 'react';
import { auth } from '../firebase';
import './signupscreen.css';
import {useHistory} from 'react-router-dom';

const SignupScreen = () => {

    const history = useHistory();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);



    const register=(e)=>{
       e.preventDefault();
       auth
       .createUserWithEmailAndPassword(
           emailRef.current.value,
           passwordRef.current.value
       )
       .then((authUser)=> {
           console.log(authUser);
       })
       .catch((error)=>{
           alert(error.message);
       });
    }

    const signin = (e) => {
       e.preventDefault();
       auth
        .signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser)=>{
            console.log(authUser);
        })
        .catch((error)=> alert("Login credentials do not match."));
        history.push("/")
    }
    return (
        <div className="signupScreen">
            <form>
            <h1 style={{textAlign:'left'}}>Sign In</h1><br/>
            <input ref={emailRef} type="email" onFocus={(e)=> e.target.placeholder=" "}placeholder="Email Address"/>
            <input ref={passwordRef} type="password"  onFocus={(e)=> e.target.placeholder=" "} placeholder="Password"/>
            <button type="submit"
               className="signupScreen__button"
               onClick={signin}>Sign In</button>
            <h4 >
                <span className="signupScreen__gray">New to Netflix? </span>
                <span 
                  onClick={register}
                  className="signupScreen__link">
                       Sign Up now.
                </span>
            </h4>
            </form>
           
        </div>
    );
}

export default SignupScreen;
