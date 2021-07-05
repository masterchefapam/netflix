import React,{useEffect} from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { auth } from './firebase';
import {
  BrowserRouter as Router,
  Switch,Route
} from 'react-router-dom';
import {  useDispatch,useSelector } from "react-redux";
import {login, logout, selectUser} from "./features/userSlice";
import Login from './screens/Login';
import ProfileScreen from './screens/ProfileScreen';
import StripePayment from './screens/StripePayment';
import Thankyou from './Thankyou/Thankyou';




function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
 

  useEffect(()=>{
   const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))

      }else{
        //Logged out
        dispatch(logout())
      }
    })
    return unsubscribe;
  },[dispatch])
  return (
    <div className="app">
       <Router>
      {!user ? (
        <Login/>
      ) : (
       
        <Switch>
       
          <Route exact path="/">
            <HomeScreen/>
          </Route>
          <Route path="/profile">
            <ProfileScreen/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/stripefee">
            <StripePayment/>
          </Route>
          <Route path="/thankyou">
            <Thankyou/>
          </Route>
        </Switch>
        
     
      )
    
    }
     </Router>
      
    </div>
  );
}

export default App;
