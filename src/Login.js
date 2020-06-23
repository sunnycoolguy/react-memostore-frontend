import React from 'react';

class Login extends React.Component{
    render(){
        return (
            <div className='container'>
                <div className='login'>
                    <div className='toggle-bar'>
                        <span className='login-button'>Log In</span>
                        <span> | </span>
                        <span className='sign-up-button'>Sign Up</span>
                    </div>
                    <form>
                        <label htmlFor='username'/>Username:<label/>
                        <input type='text' id='username'/>
                        <label htmlFor='password' id='plabel'>Password:</label> 
                        <input type='password' id='password'/>
                        <input type='submit' value='Log In'/>
                        <textarea/>
                    </form>
                </div> 
            </div>
        );
    }
}

export default Login;