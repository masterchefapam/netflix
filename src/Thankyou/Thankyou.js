import React from 'react';
import './thankyou.css';
import Nav from '../Home/Nav/Nav';
import {useHistory } from 'react-router-dom';


const Thankyou = () => {

    const history = useHistory();

    return (
        <div className="thankyou">
            <Nav/>
            <div className="thankyou__card">
               <span className="red">THANK </span> 
               <span className="white"> YOU!</span>
               <br/>
               <br/>
               <br/>
               <p> This website is for demo purposes only.</p>
               <button>
                   <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="home" className="logoThankyou"
                    onClick={()=> history.push('/')}/>
               </button>
            </div>
           
        </div>
    );
}

export default Thankyou;
