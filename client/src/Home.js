import NewBathroomForm from "./NewBathroomForm";
// import AllBathrooms from "./AllBathrooms";
// import MyToilets from "./MyToilets";
import { Link } from "react-router-dom";
import React from "react";


function Home({ user, setToilets, updateBathroomArray }) {
  console.log('user', user)

  // const validUser = user == true

  if (user) {

    return <div >

      <h1 align='center' >Welcome, {user.username}!</h1>

      <br></br>

      {/* link to page with list of ALL bathrooms */}
      <Link to={'/alltoilets'} >
        <h2 align='center'> Find a Toilet </h2>
      </Link>

      <br></br>

      <NewBathroomForm setToilets={setToilets} updateBathroomArray={updateBathroomArray}/>
    </div>
  }

  else {
    return <div align='center'>
      
      <h4 >Please Login or Sign Up</h4>

      <img src="https://i.ebayimg.com/images/g/KJ0AAOSwf7Ja-ggx/s-l500.jpg"></img>




    </div>;
  }

}

export default Home;
