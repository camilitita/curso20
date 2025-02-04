import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import ButtonP from '../components/general/Button-project';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
    
        // Retrieve stored user from localStorage
        const storedUser = JSON.parse(localStorage.getItem("user"));
    
        if (storedUser && username === storedUser.username && password === storedUser.password) {
            console.log("Login successful");
            navigate('/home'); // Redirige a la página de inicio
        } else {
            alert("Invalid username or password. Please try again or register.");
        }
    };

    const handleRegister = () => {
        console.log("Navigating to /register");
        navigate('/register'); // Redirige a la página de registro
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-cover bg-center"
            style={{
                backgroundImage: 'url(https://images4.alphacoders.com/133/thumb-1920-1335140.jpg)'
            }}>
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-md w-full bg-transparent p-6 rounded-lg shadow-lg">
                <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg bg-black/70 p-6 sm:p-8 rounded-lg shadow-lg shadow-black/60 space-y-4">
                    <h1 className="text-4xl font-handjet font-medium text-center mb-4 text-rickgreen">Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                            Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full border border-green-600 rounded py-2 px-3 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"/>
                        </div>
                        <div className="mb-6">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                            Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border border-green-600 rounded py-2 px-3 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"/>
                        </div>
                        <div className=" w-full flex-col items-center justify-between space-y-4">
                            <ButtonP type="submit">Log in</ButtonP>
                        </div>
                    </form>

                    <ButtonP onClick={handleRegister} className="w-full">
                    New Here? Register
                    </ButtonP>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
