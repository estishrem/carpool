
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import './homePage.css';

const Header = (props) => {
    const history = useHistory();

    const viewHome = () => {
        history.replace("/");
    }
    const viewTravel = () => {

        history.replace("/viewTravel");

    }
    const newTravel = () => {
        history.replace("/newTravel");
    }

   
    return (<div class="menu">
        <button className="menu-btn" onClick={() => viewHome()}>  דף הבית   </button>
        <button className="menu-btn" onClick={() => newTravel()}> נסיעה חדשה   </button>
        <button className="menu-btn" onClick={() => viewTravel()}>  נסיעות קיימות   </button>
    </div>
    );

}


export default Header;
