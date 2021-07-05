import React,{useState} from 'react';
import './login.css';
import SignupScreen from './SignupScreen';


const Login = () => {

    const [signIn, setSignIn] = useState(false);
   

    const signInHandler = ()=>{
       
        setSignIn(true);
    }
    return (
        <div  className="loginScreen">
            <div className="loginScreen__background">
                <img alt="logo"
                className="loginScreen__logo"
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                />

                <button
                 onClick={signInHandler}
                className="loginScreen__button">
                 Sign In
                </button>
                
               <div className="loginScreen__gradient"></div>
                <div className="loginScreen__body">
                {signIn ? (
                    <SignupScreen/>
                ) : (
                    <>
                    <h1>
                     Unlimited films, 
                     TV Programs and
                       more...
                   </h1>
                   <h2>
                       Watch anywhere cancel anytime...
                   </h2>
                   <h3>
                       Ready to Watch? Enter your email to create or restart your membership
                   </h3>
                   <div className="loginScreen__input">
                       <form>
                           <input type="email" placeholder="Email Addres" required
                              />
                       <button onClick={signInHandler} className="loginScreen__getStarted">
                           GET STARTED
                       </button>
                       </form>
                   </div>
               </>  
                )
                }
                
                        
                </div>
            </div>
            
        </div>
    );
}

export default Login;
