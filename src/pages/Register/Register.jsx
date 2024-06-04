import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors }, } = useForm()

    const onSubmit = (data) => {
        const { email, password, name, image_url } = data;
        if(!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)){
            return toast.error("A minimum 6 characters password contains a combination of uppercase and lowercase letter required");
        }
        createUser(email,password,name,image_url)
        .then(result => {
            console.log(result.user);
            toast.success("Thanks for registration. Your account has been created successfully.")
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div className='my-6 max-w-lg mx-auto'>
            <h3 className='text-4xl font-semibold text-center'>Register</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register("name", { required: false })} type="text" placeholder="name" className="input input-bordered"  />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                    {errors.email && <span className='text-red-600 text-sm'>This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input {...register("image_url", { required: false })} type="text" placeholder="photo url" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered" />
                    {errors.password && <span className='text-red-600 text-sm'>This field is required</span>}
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className='text-center'>Already have an account? <Link to='/login' className='text-blue-600 font-bold'>Login</Link></p>
        </div>
    );
};

export default Register;