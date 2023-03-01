import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import AllBathrooms from "./AllBathrooms";
import "./Page.css"



function App() {
  const [user, setUser] = useState();
  const [allToilets, setToilets] = useState([])

  function updateBathroomArray(updatedToilet) {
    let updatedArrayofBathrooms = allToilets.map(wc => {
      if (wc.id === updatedToilet.id) {
        return updatedToilet;
      } else {
        return wc
      }
    })
    console.log("updatedArrayofBathrooms", updatedArrayofBathrooms)
    setToilets(updatedArrayofBathrooms)

  }

  console.log('toilets', allToilets)
  // auto-login:
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    console.log("log load");
    fetch("/bathrooms")
      .then((r) => r.json())
      .then((allToilets) => setToilets(allToilets))
  }, [])



  return (
    <div >
      <NavBar user={user} setUser={setUser} />
      <main>

        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/" element={<Home user={user} setToilets={setToilets} />} />
          <Route path="/signup" element={<SignUp setUser={setUser} />} />
          {/* <Route
              exact
              path="/"
              element={user ? <Home user={user} /> : <Navigate to={"/signup"}
              />} /> */}
          <Route path="/alltoilets" element={<AllBathrooms user={user} allToilets={allToilets} updateBathroomArray={updateBathroomArray} />} />
        </Routes>

      </main>
    </div>
  );
}

export default App;

