import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInWithGoogle} = useAuth();
    return (
        <div>
           <h1>Please Login</h1> 
           <button onClick={signInWithGoogle} className="btn-danger">Google sign in</button>
        </div>
    );
};

export default Login;