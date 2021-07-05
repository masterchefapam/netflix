import React from 'react';
import './stripepayment.css';
import {useSelector} from 'react-redux';
import {selectUser} from '../features/userSlice';
import {useHistory} from 'react-router-dom';

const StripePayment = (props) => {
    const user = useSelector(selectUser);
    const history = useHistory();
    console.log(props.premium)
   
    return (
        <div className="stripepayment">
           
            <div className="stripepayment__left">
                <div className="stripepayment__username">
                   
                    <div className="emailtestmode">
                    {user.email}  <button className="testmode"> TEST MODE</button> 
                    <br/>  <br/>
                    Subscribed to Premium Plan
                                    <br/>
                    </div>
                    <div className="stripepayment__subscribe">
                        <div className="premium"> 
                            
                             <span className="price">$18.20</span>
                             <span className="month">per<br/>month</span>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className="stripepayment__right">
                  <form>
                      <button onClick={()=>history.push('/thankyou')}>
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Google_Pay_%28GPay%29_Logo_%282018-2020%29.svg/1200px-Google_Pay_%28GPay%29_Logo_%282018-2020%29.svg.png"
                           alt="gpay"/>
                      </button>
                      <label>Email</label>
                      <input type="email" />
                      <label>Card Information</label>
                       <div className="logo">
                           <input type="text" className="short"/>
                          <img src="https://www.pngkit.com/png/detail/321-3214801_pallet-covers-reclosable-plastic-poly-bags-military-visa.png"
                             alt="cc" className="visaCards"/>
                    </div> 
                      <input type="text" />
                      <label>Name of card</label>
                      <input type="text" />
                      <label>Billing Address</label>
                      <input type="text" />
                     
                      <button 
                         
                         onClick={()=>history.push('/thankyou')}className="subscribe">Subscribe</button>
                  </form>
            </div>
        </div>
    );
}

export default StripePayment;
