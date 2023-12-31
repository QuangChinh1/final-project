import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import { loginAsync, setUser } from "../../redux-toolkit/slices/accountSlice";

import "./Login.css";
import { loginApi } from "../../apis/accountApi";

const Login = () => {
    const dispatch = useDispatch();

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLogin = async () => {
        const payload = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        };
        const data = await loginApi(payload);
        // dispatch
        dispatch(setUser(data));
    };

    const isAuthenticated = localStorage.getItem("access-token");

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }
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
                        <h1>Sign in</h1>
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
                        <a href="#">Forgot your password?</a>
                        <button onClick={handleLogin}>Sign In</button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>
                                To keep connected with us please login with your
                                personal info
                            </p>
                            <button class="ghost" id="signIn">
                                Sign In
                            </button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>

                            <button class="ghost" id="signUp">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    // <div className="Login">
    //     Username: <input ref={usernameRef} type="text" />
    //     Password: <input ref={passwordRef} type="text" />
    //     <button onClick={handleLogin}>Login</button>
    // </div>
    // );
};

export default Login;
