import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home'
import {BrowserRouter as Router,Switch,Route}
from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login'
import Orders from './Orders'
import Payment from './Payment';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
;

const promise = loadStripe('pk_test_51HybbpHlWnjSxFUwilXcps0VqtzLaimByVHYD2bWC9HLl3LuDOuXil3T5Ef8mN6RYHbraSnzK9nUwZn2oZkpsXhS00kd9VQ410');


function App() {
  const [{},dispatch] = useStateValue();
  
 useEffect(() => {
 auth.onAuthStateChanged(authUser=>{
   console.log('THE USER IS >>>',authUser);
   if(authUser){
     //the user just logged in
     dispatch({
       type:'SET_USER',
       user:authUser
     })
   }else{
     //the user is logged out
     dispatch({
      type:'SET_USER',
      user:null
    })
   }
 })
  }, [])


  return (
    <Router>
    <div className="App">
 
        <Switch>
        <Route path='/orders'>
        <Orders/>
       </Route>
        <Route path='/Login'>
        <Login/>
       </Route>
       <Route path='/checkout'>
         < Header/>
         <Checkout/>
          </Route>
          <Route path='/payment'>
            < Header />
            < Elements stripe={promise}>
              <Payment />
              </Elements>
           </Route>
       <Route path='/'>
       < Header/>
        <Home/>
       </Route>
      </Switch>
     </div>
    </Router>
  );
}

export default App;





  