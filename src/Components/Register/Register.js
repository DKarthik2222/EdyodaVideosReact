import React from 'react';


const Register = () => {
    return (
        <div className="card registerForm">
            <form >
                <h2 className="card-header">Register form</h2>
                <div className="card-body">
                    <div className="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" className="form-control" placeholder="Enter email" id="email" />
                    </div>
                    <div className="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password" id="pwd" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>

    );
}

export default Register;