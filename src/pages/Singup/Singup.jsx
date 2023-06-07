import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createUser, googleLogIn } from '../../features/auth/authSlice';

const Singup = () => {

    const dispatch = useDispatch();
    const { isLoading, error, isError, email } = useSelector(state => state.auth);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    console.log(formData);
    const { password, confirmPassword } = formData;

    const [passwordCount, setPasswordCount] = useState("");
    useEffect(() => {
        if (password.length < 6 && password !== "") {
            setPasswordCount("Minimum six character password is needed for register!")
        }
    }, [password, passwordCount.length])


    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        if (
            password !== undefined &&
            password !== "" &&
            confirmPassword !== undefined &&
            confirmPassword !== "" &&
            password === confirmPassword
        ) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }

    }, [confirmPassword, password])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSignUpData = (e) => {
        e.preventDefault();
        console.log(formData);
        dispatch(createUser({ email: formData.email, password: formData.password }))
    };

    const handleGoogleSignUp = () => {
        dispatch(googleLogIn())
    }

    useEffect(() => {
        if (!email && isError) {
            toast.error(error)
        }
        else {
            toast.success("Successfully Registration Complete")
        }
    }, [isError, error, email])



    return (
        <div className='min-h-screen bg-slate-200  flex items-center justify-center'>

            <div className="w-[450px] bg-white p-8 rounded-xl shadow shadow-slate-300 my-10">
                <h1 className="text-4xl font-medium">Singup</h1>
                <p className="text-slate-500">Hi, Welcome back 👋</p>

                <div className="my-5">
                    <button
                        onClick={handleGoogleSignUp}
                        className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                        <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt="" /> <span>Singup with Google</span>
                    </button>
                </div>
                <form action="" className="" onSubmit={handleSignUpData}>
                    <div className="flex flex-col space-y-5">
                        <label htmlFor="name">
                            <p className="font-medium text-slate-700 pb-2">Name</p>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your name" />
                        </label>
                        <label htmlFor="phone">
                            <p className="font-medium text-slate-700 pb-2">Phone Number</p>
                            <input
                                id="phone"
                                name="phone"
                                type="number"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your phone number" />
                        </label>
                        <label htmlFor="email">
                            <p className="font-medium text-slate-700 pb-2">Email address</p>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" />
                        </label>
                        <label htmlFor="password">
                            <p className="font-medium text-slate-700 pb-2">Password</p>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password" />
                            {
                                <div><p className='text-[12px] text-yellow-700 font-bold'>{passwordCount}</p></div>
                            }
                        </label>

                        <label htmlFor="password">
                            <p className="font-medium text-slate-700 pb-2">Confirm Password</p>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password" />
                        </label>

                        <button
                            type='submit'
                            disabled={disabled}
                            className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center disabled:bg-gray-300 disabled:cursor-not-allowed">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            <span>Singup Now</span>
                        </button>

                        {
                            isError && <span className='text-[12px] text-rose-700 font-bold'>This email is already taken. Please enter new one</span>
                        }

                        <p className="text-center">Already have an account? <a href="#" className="text-indigo-600 font-medium inline-flex space-x-1 items-center"><Link to='/login'>login now </Link><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg></span></a></p>
                    </div>
                </form>
            </div>




        </div>
    )
}

export default Singup