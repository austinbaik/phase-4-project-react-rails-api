import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import AllBathrooms from "./AllBathrooms";



function App() {
  const [user, setUser] = useState(null);
  const [allToilets, setToilets] = useState([])

  console.log('toilets', allToilets)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>

          <Routes>
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/" element={<Home user={user} setToilets={setToilets}/>} />
            <Route path="/signup" element={<SignUp setUser={setUser} />} />
            {/* <Route
              exact
              path="/"
              element={user ? <Home user={user} /> : <Navigate to={"/signup"}
              />} /> */}
              <Route path="/alltoilets" element={AllBathrooms} user={user} />
          </Routes>

      </main>
    </>
  );
}

export default App;

