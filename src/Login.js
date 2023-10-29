import React, { useState } from 'react';
import './Login.css';
import Navbar from './Navbar';

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
        <div className='NavContainer'>
            <Navbar />
        </div>
            <div className="Container">
                <form onSubmit={handleSubmit}>
                <h2>Log In To Your Account</h2>
                    <div>
                        <label>Username / Email:</label>
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
                    <div className='bottom-buttons'>
                        <button type="submit">Log In</button>

                    </div>

                </form>
            </div>
        </div>
    );

}

export default Login

// did this change