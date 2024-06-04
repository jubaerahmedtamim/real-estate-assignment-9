import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='my-6 max-w-lg mx-auto'> 
            <h3 className='text-4xl font-semibold text-center'>Please Login</h3>
            <form className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className='text-center'>Don't have an account? <Link to='/register' className='text-blue-600 font-bold'>Register</Link></p>
        </div>
    );
};

export default Login;