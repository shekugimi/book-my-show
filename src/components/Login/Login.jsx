import React, { useState } from "react";
import "./Login.css";

function Login({ setLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        setLogin(false);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h1>Sign in to your account</h1>
                <div className="form-group">
                    {/* <label htmlFor="username">Username:</label> */}
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        placeholder="Username"
                        required
                    />
                </div>
                <div className="form-group">
                    {/* <label htmlFor="password">Password:</label> */}
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
