import React from 'react';
import {useSelector} from 'react-redux';
import {useHistory } from 'react-router-dom';
import {selectUser} from '../features/userSlice';
import { auth } from '../firebase';
import Nav from '../Home/Nav/Nav';
import './profilescreen.css';


const ProfileScreen = () => {
    const user = useSelector(selectUser);
    const history = useHistory();
    const choichesHandler = (premium)=> {
       
        history.push('/stripefee')
    }


    return (
        <div className="profileScreen">
            
            <Nav/>
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img alt="profile" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                    />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        
                        <div className="profileScreen__plans">
                            <br/>
                        <h4 className="profileScreen__h4">Plans (Current Plan: premium)</h4>
                        <div className="profileScreen__renewal">
                            Renewal date: 04/03/2021
                        </div>
                        <div className="profileScreen__subscriptions">
                        
                             <div className="col1"> Neflix HD<br/><span style={{fontSize: '10px'}}>1080p + HDR</span></div> 
                             <div className="col2"> 
                                <button className="subscribe__button" 
                                onClick={choichesHandler}>Subscribe
                                  </button>
                                </div> 

                             <div className="col1"> Neflix SD<br/><span style={{fontSize: '10px'}}>SD Quality</span></div> 
                             <div className="col2"> <button className="subscribe__button" onClick={()=> history.push('/stripefee')}>Subscribe</button></div> 

                             <div className="col1"> Neflix HD<br/><span style={{fontSize: '10px'}}>1080p</span></div> 
                             <div className="col2"> <button className="subscribe__button__current">Current Plan</button></div> 
                         
                          
                           
                        </div>
                            <button className="profileScreen__signOut"
                                onClick={()=> auth.signOut()}>
                                    Sign Out
                            </button>
                        </div>
                    </div>
               </div>
            </div>
            <div className="noDisplay" >
             
             
               
            </div>
        </div>
    );
}

export default ProfileScreen;
