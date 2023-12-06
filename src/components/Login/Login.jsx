import React from 'react'
import "./Login.css";
import { Button, Typography } from '@mui/material';
import { useState } from 'react';



function Login() {

    const submitHandler =(e) => {
        e.preventDefault();;
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
  return (
    <div className='login'>
        <div className="loginContainer">
            <form className='loginForm'onSubmit={submitHandler}>
                <Typography variant="h4">
                    <p>A</p>
                    <p>D</p>
                    <p>M</p>
                    <p>I</p>
                    <p style={{marginRight: "1vmax"}}>N</p>

                    <p>P</p>
                    <p>A</p>
                    <p>N</p>
                    <p>E</p>
                    <p>L</p>
                    
                </Typography>

                <div>
                    <input type="email"
                    placeholder='Admin Email'
                    value={email}
                    onChange={(e) =>setEmail(e.target.value)}
                    />
                    <input type="password"
                    placeholder='Password'
                    value={password}

                    onChange={(e) =>setPassword(e.target.value)}
                    />
                    <Button type='submit' variant='contained'>Login</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login