import { Button } from '@mui/base'
import { Typography } from '@mui/material'
import React, { useState } from 'react'
import "./Contact.css";


function Contact() {
    const [name, setName] =useState("");
    const [email, setEmail] =useState("");
    const [message, setMessage] = useState("");

    const contactFromHandler =(e)=>{
        e.preventDefault();
    }

  return (
    <div className='contact'>
        <div className="contactRightBar"></div>

        <div className="contactContainer">
            <from  className="contactContainerForm" onSubmit={contactFromHandler}>
                <Typography variant='h4' >Contact Us</Typography>
                <input type="text" className='item' required placeholder='Full Name' value={name} onChange={(e)=>setName(e.target.value)} id="name" autoComplete='off' />
                <input type="email" className='item' required placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} id='email' autoComplete='off'/>
                <textarea placeholder='Message' className='item' required cols="30" rows="10" value={message} onChange={(e)=>setMessage(e.target.value)}  autoComplete='off'></textarea>
                <Button variant="contained" type='submit'>Send</Button>
            </from>
        </div>
    </div>
  )
}

export default Contact