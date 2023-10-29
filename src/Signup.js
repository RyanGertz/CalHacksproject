import React, { useState } from 'react';
import "./Signup.css"
import { NavLink } from 'react-router-dom';

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
            <div className="Container">

                <h2>Login To Your Account</h2>
                <form onSubmit={handleSubmit}>
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
                        <a><NavLink to='/Login'>I Already Have An Account</NavLink></a>
                    </div>

                </form>
            
            </div>
        </div>
    );

}



export default Signup