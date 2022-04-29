import React, { useState } from "react";
// import { button, error, input, filed, label } from "../styles/button";
import { createBrowserHistory } from 'history';
import { Link, useHistory, Redirect, Route } from "react-router-dom";

function LoginForm({ onLogin }) {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [errors, setErrors] = useState([]);
const [isLoading, setIsLoading] = useState(false);

const history = createBrowserHistory();

function handleSubmit(e) {
e.preventDefault();
setIsLoading(true);
fetch("/login", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
}).then((r) => {
    setIsLoading(false);
    if (r.ok) {
    r.json().then((user) => {
        onLogin(user);
    console.log("logged in");
    console.log(user.seller);
    // history.push("/")
    // if (user.seller) return history.push("/sellerpage")
    // else return history.push("/")
    })
    } else {
    r.json().then((err) => setErrors(err.errors));
    }
});
}

return (
<form onSubmit={handleSubmit} >
    <field>
    <label htmlFor="username">Username</label>
    <input
        type="text"
        id="username"
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
    />
    </field>
    <filed>
    <label For="password">Password</label>
    <input
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />
    </filed>
    <filed>
    <button variant="fill" color="primary" type="submit">
        {isLoading ? "Loading..." : "Login"}
    </button>
    </filed>
    <filed>
    {errors.map((err) => (
        <error key={err}>{err}</error>
    ))}
    </filed>
</form>
);
}

export default LoginForm;