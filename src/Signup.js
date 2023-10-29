import React, { useState } from 'react';
import "./Signup.css"
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

function Signup() {
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
        <div className='Signup'> 
        <div className='NavContainer'>
            <Navbar />
        </div>
            <div className="Container">
                <form onSubmit={handleSubmit}>
                <h2>Sign Up For An Account</h2>
                    <div>
                        <label>Username:</label>
                        <input 
                            type="text" 
                            name="username" 
                            value={formData.username} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input 
                            type="text" 
                            name="username" 
                            value={formData.email} 
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
                        <button type="submit">Sign Up</button>
                        <NavLink to='/Login'>I Already Have An Account</NavLink>
                    </div>

                </form>
            
            </div>
        </div>
    );

}



export default Signup