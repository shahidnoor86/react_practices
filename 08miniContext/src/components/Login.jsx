import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import UserContext from '../context/UserContext';

export function Login(props) {
    const [userName, setUserName] = useState('');
    const [pwd, setPwd] = useState('');

    const {setUser} = useContext(UserContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({userName, pwd});
    }
    

    return (
        <div>
            <h2>Login</h2>
            <input 
                type='text'
                placeholder='UserName'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            <input
                type='text'
                placeholder='Password'
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
