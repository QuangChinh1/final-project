import React, { useRef } from "react";

import "./Register.css";
import { useDispatch } from "react-redux";
import { register } from "../../apis/accountApi";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleRegister = async () => {
        try {
            const data = {
                username: usernameRef.current.value,
                password: passwordRef.current.value,
            };

            await register(data);
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div class="container" id="container">
                <div class="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div class="social-container">
                            <a href="#" class="social">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="social">
                                <i class="fab fa-google-plus-g"></i>
                            </a>
                            <a href="#" class="social">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div class="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign up</h1>
                        <div class="social-container">
                            <a href="#" class="social">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="social">
                                <i class="fab fa-google-plus-g"></i>
                            </a>
                            <a href="#" class="social">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                        <span>or use your account</span>
                        <input placeholder="username" ref={usernameRef} />
                        <input
                            type="password"
                            placeholder="Password"
                            ref={passwordRef}
                        />

                        <button onClick={handleRegister}>Sign Up</button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>

                            <button class="ghost" id="signIn">
                                Sign Up
                            </button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>

                            <button class="ghost" id="signUp">
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <>
        //     <div>Register</div>
        //     {/* Username: <input ref={usernameRef} type="text" /> */}
        //     {/* Password: <input ref={passwordRef} type="text" /> */}
        //     {/* <button onClick={handleRegister}>Register</button> */}
        // </>
    );
};

export default Register;
