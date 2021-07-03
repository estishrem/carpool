
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { saveUser } from "../action";
import { signupToServer } from '../services/signup';
import './contact.css';
import {sendVoiceMail} from '../services/voicemail';
import  {mailToServer}  from '../services/mail';
import '../style/login.css';

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

import './homePage.css';


const Contact = (props) => {

    const { onHide, show, item } = { ...props }

    let history = useHistory();
    const dispatch = useDispatch()

    const [email, setEmail] = useState('');

    const [phoneNamber, setPhoneNamber] = useState('');
    const [errorPhone, setErrorPhone] = useState('');



    const sendMailAndPhone = async (em,phoneNamber,item) => {
        sendMail(item.email,em,phoneNamber);
        onHide();
      //  sendPhone(item.phone);
      }
    
    
      const sendMail = async (email,em,phoneNumber) => {
        try {
          const res = await mailToServer(email,em,phoneNumber)
          console.log(res);
         // alert("נשלח מייל לנהג");
        }
        catch (error) {
        //  alert("הרישום נכשל😒");
        }
      }
    
    //   const sendPhone = async (phone) => {
    //     try {
         
    //       const res = await sendVoiceMail("0548440106","mindysa@hjk","052787783");
    //       console.log(res);
    //       alert("נשלח מייל לנהג");
    //     }
    //     catch (error) {
    //       alert("הרישום נכשל😒");
    //     }
    //   }

    const closeDialog = () => {

        onHide();
    }

  
    const handlePhoneNamberChange = (e) => {
        setPhoneNamber(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }


    return (
        <Dialog class="contact" open={show} onClose={closeDialog} maxWidth="xs" fullWidth={true} >
            <DialogTitle class="title2">
                <div class="title2">יצירת קשר לתיאום נסיעה</div>

            </DialogTitle>
            <DialogContent >
                {
                    <div class="contact">
                       
                     
                        <div>
                            <br />
                        </div>
                        <div class="line62">
                            <input type="text" class="text" name="mail" onChange={handleEmailChange} />
                            <label class="line">מייל</label>
                        </div>
                        <div class="line72">
                            <input type="text" class="text" name="phone" onChange={handlePhoneNamberChange} />
                            <label class="line">טלפון</label>

                        </div>

                       
                       
                    </div>
                }
               
            </DialogContent>
            <DialogActions>
            <button class="btn save2" onClick={() => sendMailAndPhone(email,phoneNamber,item)}>שליחה</button>

                </DialogActions>
        </Dialog>
        

        
        
        );
  

}


export default Contact;