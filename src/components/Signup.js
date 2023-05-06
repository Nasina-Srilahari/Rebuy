import React, { useState } from 'react';
import { db, storage } from '../firebaseConfigs/firebaseconfig'
import { collection, addDoc } from 'firebase/firestore';
import './Signup.css'
import panda_back from '../components/panda_back.jpeg'
import Navbar2 from './Navbar2'

function Signup() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [passwd, setpasswd] = useState("");
    const [pno, setpno] = useState("");
    const handleForm = (e) => {
        e.preventDefault()
        console.log("entered")
        addDoc(collection(db, "user"), {
            name,
            email,
            passwd,
            pno
        })
    }
   return (
        <div>
            <Navbar2/>
        <div className='Signup-back' style= {{ backgroundImage: `url(${panda_back})`, backgroundRepeat: `no-repeat`, backgroundSize: `100% 100%`}}>
            <center>
                <div className='Signup'>
                    <form className='Signup-form' onSubmit={handleForm}>
                        <label>Enter your name</label>
                        <input type="text" onChange={(e) => { setname(e.target.value) }} placeholder="Enter your name" />

                        <label>Enter your email</label>
                        <input type="text" onChange={(e) => { setemail(e.target.value) }} placeholder="Enter your email" />

                        <label>Enter your phone number</label>
                        <input type="text" onChange={(e) => { setpno(e.target.value) }} placeholder="Enter your phone number" />

                        <label>Enter your password</label>
                        <input type="text" onChange={(e) => { setpasswd(e.target.value) }} placeholder="Enter your password" />

                        <button type="submit">Register</button>
                    </form>
                </div>
            </center>
        </div>
        </div>
    )
}
export default Signup