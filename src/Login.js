import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        // Connects to backend here I think
        console.log(formData);
    };

    return (
        <div className='Login'> 
            <div className="Container">
            <h2>Login To Your Account</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username or Email:</label>
                    <input 
                        type="text" 
                        name="username" 
                        value={formData.username} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                    />
                </div>
                <button type="submit">Log In</button>
            </form>
        </div>
    </div>
    );

}

export default Login