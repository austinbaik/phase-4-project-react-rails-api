import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login({ setUser }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
        // ***** When I get my User object back, I can serilize the reviews and bathrooms for this user in the response - set to state then, pass down the user object, user.reviews, user.bathrooms 

      }
      navigate("/");
    });
  }

//   function link(){

//     return(
//     <Link to={'/alltoilets'} >
//     <h2> Discover Other Toilets </h2>
//     </Link>
// )
//   }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
