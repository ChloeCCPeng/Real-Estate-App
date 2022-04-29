import React, { useState } from "react";
// import { button, error, input, field, label, Textarea } from "../styles";
// import inputlabel from '@mui/material/inputlabel';
import { useHistory } from "react-router-dom";

function SignUpForm({ onLogin }) {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [passwordConfirmation, setPasswordConfirmation] = useState("");
const [sellerTrue, setSellerTrue] = useState(false);
const [sellerFalse, setSellerFalse] = useState(true);
const [errors, seterrors] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [seller, setSeller] = useState(false)

const history = useHistory();

function handleSellerTrue() {
setSellerTrue(!sellerTrue)
setSeller(!seller)
}

function handleSellerFalse() {
setSellerFalse(!setSellerFalse)
setSeller(!seller)
}

function handleSubmit(e) {
e.preventDefault();
seterrors([]);
setIsLoading(true);
fetch("/signup", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({
    username,
    password,
    password_confirmation: passwordConfirmation,
    seller
    }),
}).then((r) => {
    setIsLoading(false);
    if (r.ok) {
    r.json().then((user) => onLogin(user));
    if (seller) return history.push("/sellerpage")
    else return history.push("/")
    } else {
    r.json().then((err) => seterrors(err.errors));
    }
});
}

return (
<form onSubmit={handleSubmit}>
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
    <field>
    <label htmlFor="password">Password</label>
    <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
    />
    </field>
    <field>
    <label htmlFor="password">Password Confirmation</label>
    <input
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        autoComplete="current-password"
    />
    </field>
    <field>
    <inputlabel id="select-label">Are you a seller?</inputlabel>
    <div>
        <input
        type="radio"
        value={sellerTrue}
        checked={seller === true}
        onClick={handleSellerTrue}
        /> yes
    </div>
    <div>
        <input
        type="radio"
        value={sellerFalse}
        checked={seller === false}
        onClick={handleSellerFalse}
        /> no
    </div>
    </field>
    <field>
    <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
    </field>
    <field>
    {errors.map((err) => (
        <error key={err}>{err}</error>
    ))}
    </field>
</form>
);
}

export default SignUpForm;