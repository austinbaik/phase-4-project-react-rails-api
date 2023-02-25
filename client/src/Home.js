import NewBathroomForm from "./NewBathroomForm";
// import AllBathrooms from "./AllBathrooms";
import MyToilets from "./MyToilets";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";


function Home({ user, setToilets }) {
  console.log('user', user)

  // const validUser = user == true

  if (user) {

    return <div>

      <h1>Welcome, {user.username}!</h1>

      {/* <br></br>

      <MyToilets /> */}
      {/* show only toilets reviewed by the user */}

      <br></br>


      {/* link to page with list of ALL bathrooms */}
      <Link to={'/alltoilets'} >
        <h1> Discover Other Toilets </h1>
      </Link>

      <br></br>

      <NewBathroomForm setToilets={setToilets} />
    </div>
  }

  else {
    return <h1>Please Login or Sign Up</h1>;
  }

}

export default Home;
