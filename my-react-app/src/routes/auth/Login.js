import React from 'react';
import './auth.css';

const Login = ({ username, password, setUsername, setPassword, handleSubmit }) => {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={handleInputChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleInputChange}
            />
            <button type="submit">Sign In</button>
        </form>
    );
}

export default Login;
