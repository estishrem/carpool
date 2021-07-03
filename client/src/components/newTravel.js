import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Header from './header';
import './viewTravel.css';
import create from '../images/create.png';

import DriverAndPassenger from './driverAndPassenger';

const NewTravel = () => {

  const [showModel, setShowModel] = useState(false);
  const [isDriver, setIsDriver] = useState(false);

  const history = useHistory();

  const passenger = () => {
    setIsDriver(false);
    setShowModel(true);
  }

  const driver = () => {
    setIsDriver(true);
    setShowModel(true);
  }

  return (<div class="bg-img" style={{ backgroundImage: `url(${create})` }}>
    <Header />

    <button className="new-btn btn1" onClick={() => driver()}> אני נהג   </button>

    <button className="new-btn btn2 " onClick={() => passenger()}>  אני נוסע   </button>



    <DriverAndPassenger
      show={showModel}
      onHide={(e) => setShowModel(false)}
      isDriver={isDriver}

    />

  </div>

  )

}


export default NewTravel;
