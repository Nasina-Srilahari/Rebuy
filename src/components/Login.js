import React, { useState } from 'react'
import { db, storage } from '../firebaseConfigs/firebaseconfig'
import { collection, query, onSnapshot, getDocs, QuerySnapshot } from 'firebase/firestore';
import './Login.css'
import login_back2 from '../components/login_back2.jpeg'
import login_back_2 from '../components/login_back_2.jpeg'
import login_back3 from '../components/login_back3.jpeg'
import Navbar2 from './Navbar2'
import {useLocation, useNavigate} from 'react-router'
import { Navigate, Outlet } from 'react-router-dom';

const Login = () => {
    const [email_login, setemail_login] = useState("");
    const [pwd_login, setpwd_login] = useState("")
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();
        const path = "user";

        getDocs(collection(db, path)).then((QuerySnapshot) => {
            QuerySnapshot.forEach((doc) => {
                console.log(doc.data());
                if (email_login == doc.data().email && pwd_login == doc.data().passwd) {
                    console.log("entered");
                    navigate("/SEll", {state:{email:email_login}})
                }
                else{
                    <Outlet/>
                }

            })
        }).catch((error) => {
            console.log(error.message);
        });
    }
    return (
        <div>
            <Navbar2/>
        <div className='Login-back'style= {{ backgroundImage: `url(${login_back3})`, backgroundRepeat: `no-repeat`, backgroundSize: `100% 100%`}} >
            <center>
            <div className='Login'>
                <form className='Login-form' onSubmit={handleSubmit}>
                    <label>Enter your email</label>
                    <input type="text" onChange={(e) => { setemail_login(e.target.value) }} placeholder="Enter your email" />

                    <label>Enter your password</label>
                    <input type="text" onChange={(e) => { setpwd_login(e.target.value) }} placeholder="Enter your password" />

                    <button type='submit'>Login</button>
                </form>
            </div>
        </center>
        </div>
        </div>
    )
}
export default Login