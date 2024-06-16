import React, { useState } from 'react';
import axios from 'axios';
import './auth.css';
import Login from './Login';
import Register from './Register';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
    const [switchState, setSwitchState] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = () => {
        setSwitchState(true);
    };

    const handleSignUp = () => {
        setSwitchState(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            if (switchState) {
                const response = await axios.post('/api/auth/login', { username, password });
                const { token } = response.data;
                localStorage.setItem('accessToken', token);
            } else {
                // Register request
                const response = await axios.post('/api/auth/register', { username, password });
                const { token } = response.data;
                localStorage.setItem('accessToken', token);
            }

            setUserUsername(username);
            setIsLoggedIn(true);
        } catch (error) {
            console.error('Authentication failed:', error);
        }
    };

    return (
        <div className="authentication-container">
            <div className="auth-header">
                <button onClick={handleSignIn}>Sign In</button>
                <button onClick={handleSignUp}>Sign Up</button>
            </div>
            {switchState ? (
                <Login
                    username={username}
                    password={password}
                    setUsername={setUsername}
                    setPassword={setPassword}
                    handleSubmit={handleSubmit}
                />
            ) : (
                <Register
                    username={username}
                    password={password}
                    setUsername={setUsername}
                    setPassword={setPassword}
                    handleSubmit={handleSubmit}
                />
            )}
        </div>
    );
}

export default Authentication;
