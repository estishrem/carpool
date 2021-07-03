
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { saveUser } from "../action";
import { signupToServer } from '../services/signup';
import './newTravel.css';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const DriverAndPassenger = (props) => {

    const { onHide, show, isDriver } = { ...props }

    let history = useHistory();
    const dispatch = useDispatch()
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [departure, setdeparture] = useState('');
    const [destination, setdestination] = useState('');
    const [payment, setpayment] = useState('');
    const [gender, setgender] = useState('');
    const [numPassengers, setnumPassengers] = useState('');
    const [email, setEmail] = useState('');

    const [phoneNamber, setPhoneNamber] = useState('');
    const [errorPhone, setErrorPhone] = useState('');

    const [emailAlerts, setemailAlerts] = useState('');
    const [phoneAlerts, setphoneAlerts] = useState('');
    const [userType, setuserType] = useState(isDriver ? true : false);
    const [levelNum, setLevelNum] = useState(1);



    const signup = async () => {
        try {
            await signupToServer(date, hour, departure, destination, email, phoneNamber, userType);
           // console.log('res' + res);
            // alert("ברישום בוצע בהצלחה!ו!!!!😊😊");



            const res = [
                    {
                    "date": "04/07/2021",
                    "hour": "07:00",
                    "destination": "האומן 25, ירושלים, ישראל",
                    "departure": "צפרירים 16, ירושלים, ישראל",
                    "email": "sellyb@digital.gov.il",
                    "phone": "0509933054",
                    "userType": "driver",
                    },
                    {
                    "date": "04/07/2021",
                    "hour": "06:15",
                    "destination": "רבקה 13, ירושלים, ישראל",
                    "departure": " טללים 4, ירושלים, ישראל",
                    "email": "ds0527659854@gmail.com",
                    "phone": "0527659854",
                    "userType": "driver",
                    }
                    ];
            history.replace("/viewTravel", { res });
        }
        catch (error) {
            // alert("הרישום נכשל😒");
        }
    }

    const closeDialog = () => {
        setPhoneNamber(null);
        setErrorPhone('');

        onHide();
    }

    const handlenumPassengersChange = (e) => {
        setnumPassengers(e.target.value)
    }
    const handlePhoneNamberChange = (e) => {
        setPhoneNamber(e.target.value)
    }

    const handleDestinationChange = (e) => {
        setdestination(e.target.value)
    }

    const handleDepartureChange = (e) => {
        setdeparture(e.target.value)
    }
    const handleDateChange = (e) => {
        setDate(e.target.value)
    }
    const handleHourChange = (e) => {
        setHour(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    // const handlePhoneAlertsChange = (e) => {
    //     setphoneAlerts(e.target.value)
    // }
    // const handleEmailAlertsChange = (e) => {
    //     setemailAlerts(e.target.value)
    // }
    // const saveAllData = (e) => {

    // }

    /*const changeDialogContenet= (e) => {
        setLevelNum(e.target.id);
        if(levelNum==1){
            return(
                <div>
                    <div>
                        <label>מאיפה יוצאים?</label>
                        <input value={departure} type="text" onChange={handleDepartureChange}/>
                    </div>
                    <br/>
                    <div>
                        <label>לאן נוסעים?</label>
                        <input value={destination} type="text" onChange={handleDestinationChange}/>
                    </div>
                    <br/>
                    <div>
                        <label>כמות הנוסעים</label>
                        <input value={numPassengers} type="text" onChange={handlenumPassengersChange}/>
                    </div>
                    <br/>
                    <div>
                    <label>תאריך</label>
                        <input  type="date" value={date} onChange={handleDateChange}/>
                    </div> 
                    <br/>
                    <div>
                        <label>שעה</label>
                        <input  type="time" value={hour} onChange={handleHourChange}/>
                    </div> 

                </div>
            )
        }
        else if(levelNum==2){
        return(
            <div>
                <div>
                    <label>מייל</label>
                    <input type="text" id="email" name="email" value={email} onChange={handleEmailChange}/>
                </div>
                <br/>
                <div>
                    <label>טלפון</label>
                    <input id="phone" name="phone" value={phoneNamber} onChange={handlePhoneNamberChange}/>
                </div>
                <br/>
                <div>
                    <label>גבר</label><input  type="radio" name="gender1" value="1" checked onC={handlenumPassengersChange}/>
                    <label>אישה</label><input  type="radio" name="gender1" value="2" onChange={handlenumPassengersChange}/>

                </div>
                <br/>
                <div>
                    <label>בחינם</label><input  type="radio" name="payment1" value="1" checked onChange={handlenumPassengersChange}/>
                    <label>בתשלום</label><input  type="radio" name="payment2" value="2" onChange={handlenumPassengersChange}/>

                </div>
                <br/>
                <div>
                    <label>רוצה לנסוע?</label><input  type="radio" name="userType1" value="1" checked onChange={handlenumPassengersChange}/>
                    <label>רוצה לנהוג?</label><input  type="radio" name="userType1" value="2" onChange={handlenumPassengersChange}/>

                </div>
           </div>
        )}
        else if(levelNum==3){
            return(
                <div>
                    <div>
                        <h2>לאן לשלוח לך עידכון על הנסיעה?</h2>
                    </div>
                    <br/>
                    <div>
                        <label>לטלפון</label>
                        <input type="checkbox" name="phoneAlert" checked onChange={handlePhoneAlertsChange}/>
                    </div>
                    <div>
                        <label>למייל</label>
                        <input type="checkbox" name="EmailAlert"  onChange={handleEmailAlertsChange}/>
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <input type="button" value="לסיום ורישום נסיעה" name="done" onClick={saveAllData}/>
                    </div>

                </div>
            )
        }
    }*/

    return (
        <Dialog open={show} onClose={closeDialog} maxWidth="xs" fullWidth={true} >
            <DialogTitle class="title">
                <div class="title">נסיעה חדשה</div>

            </DialogTitle>
            <DialogContent >
                {
                    <div class="back_img">
                        <div class="line1">
                            <input value={departure} class="text" type="text" onChange={handleDepartureChange} />
                            <label class="line">?מאיפה יוצאים  </label>

                        </div>
                        <br />
                        <div class="line2">
                            <input value={destination} class="text" type="text" onChange={handleDestinationChange} />
                            <label class="line">?לאן נוסעים</label>

                        </div>
                        <br />
                        <div class="line3">
                            <input value={numPassengers} class="text" type="text" onChange={handlenumPassengersChange} />
                            <label class="line">כמות הנוסעים   </label>

                        </div>
                        <br />
                        <div class="line4">
                            <input type="date" class="text" value={date} onChange={handleDateChange} />
                            <label class="line">תאריך</label>

                        </div>
                        <br />
                        <div class="line5">
                            <input type="text" class="text" value={hour} onChange={handleHourChange} />
                            <label class="line">שעה</label>

                        </div>
                        <div>
                            <br />
                        </div>
                        <div class="line6">
                            <input type="text" class="text" name="mail" onChange={handleEmailChange} />
                            <label class="line">מייל</label>
                        </div>
                        <div class="line7">
                            <input type="text" class="text" name="phone" onChange={handlePhoneNamberChange} />
                            <label class="line">טלפון</label>

                        </div>


                        
                    </div>
                }
                {/* <TextField fullWidth label="PhoneNamber"
            required error={!!errorPhone} helperText={errorPhone || ''} onChange={handlePhoneNamberChange} />
            /*               
                <div>
                    <label>בחינם</label><input  type="radio" name="payment1" value="1" checked onChange={handlenumPassengersChange}/>
                    <label>בתשלום</label><input  type="radio" name="payment2" value="2" onChange={handlenumPassengersChange}/>

                </div>
                <br/>

*/
                }
            </DialogContent>
            <DialogActions>
            <div >
                            <input class="btn save" type="button" value="חפש לי נסיעות" name="done" onClick={signup} />
            </div>
                {/* <Button variant="contained" color="primary" onClick={handleSave}>SAVE</Button>
        <Button variant="contained" color="secondary" onClick={handleCancle}>CANCLE</Button> */}
            </DialogActions>
        </Dialog>);
    /* <input id="1" type="button" value="1" onClick={setLevelNum}/>
               -------------
               <input id="2" type="button" value="2" onClick={(e) => {
                    setLevelNum(e.target.value)}}/>
               -------------
               <input id="3" type="button" value="3" onClick={(e) => {
                    setLevelNum(e.target.value)}}/>*/

}


export default DriverAndPassenger;