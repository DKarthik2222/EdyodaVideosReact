import React from 'react';
import './Login.css'
const Login = () => {
    return (
        <>
            <div className="card loginForm">
                <form >
                    <h2 className="card-header">Login form</h2>
                    <div className="card-body">
                        <div className="form-group">
                            <label for="email">Email address:</label>
                            <input type="email" className="form-control" placeholder="Enter email" id="email" />
                        </div>
                        <div className="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" className="form-control" placeholder="Enter password" id="pwd" />
                        </div>
                        <div className="form-group form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" /> Remember me
                        </label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;