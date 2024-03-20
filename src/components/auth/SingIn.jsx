import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Додано стан для відображення / приховування пароля

  function logIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);
        setError("SORRY, COULDN'T FIND YOUR ACCOUNT");
      });
  }

  return (
    <div>
      <form>
        <h2>Log in</h2>
        <input
          placeholder="Please enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <input
          placeholder="Please enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? "text" : "password"} // Змінено тип поля введення залежно від стану showPassword
        />
        <button onClick={logIn}>Login</button>
        <label>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          Show Password
        </label>
        {error ? <p style={{ color: "red" }}>{error}</p> : ""}
      </form>
    </div>
  );
};

export default SignIn;
