import React from 'react';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className='form-container'>
        <h2 className='form-title'>Sign Up</h2>
        <form>
            <div className='form-control'>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='' required />
            </div>
            <div className='form-control'>
                <label htmlFor="Password">Password</label>
                <input type="Password" name='Password' id='' required />
            </div>
            <div className='form-control'>
                <label htmlFor="Password">Confirm Password</label>
                <input type="Password" name='confirm' id='' required />
            </div>
            <input className='btn-submit' type="submit" value="Login" />
        </form>
    </div>
    );
};

export default SignUp;