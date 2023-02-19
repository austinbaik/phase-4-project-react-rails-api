import NewBathroomForm from "./NewBathroomForm";
import AllBathrooms from "./AllBathrooms";
import MyToilets from "./MyToilets";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";


function Home({ user, setToilets }) {

  const validUser = user == true

  useEffect(() => {
    fetch("/alltoilets")
      .then((r) => r.json())
      .then((allToilets) => setToilets(allToilets))
  }, [validUser])

  if (user) {

    return <div>

      <h1>Welcome, {user.username}!</h1>

      <br></br>

      <MyToilets />
      {/* show only toilets reviewed by the user */}

      <br></br>


      {/* link to page with list of ALL bathrooms */}
      <Link to={'/alltoilets'} >
        <h2> Discover Other Toilets </h2>
      </Link>


      <NewBathroomForm />
    </div>
  } else {
    return <h1>Please Login or Sign Up</h1>;
  }
}

export default Home;
