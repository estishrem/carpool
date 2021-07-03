import React from 'react';
import Header from './header';
import homeBG from '../images/homepage.png';
import { useHistory } from "react-router-dom";
import './viewTravel.css';

import './homePage.css';
// import { loginToServer } from '../services/login';
const Login = (props) => {
  const history = useHistory();
  const viewNewTravel = () => {
    history.replace("/newTravel");
  }

  return (<div class="bg-img home-bg" style={{ backgroundImage: `url(${homeBG})` }} >
    <Header />
    <div>
      <button className="new-btn btn3" onClick={() => viewNewTravel()}> לנסיעה חדשה   </button>
    </div>
  </div>
  );

}

export default Login;