import NewBathroomForm from "./NewBathroomForm";
import AllBathrooms from "./AllBathrooms";
import MyToilets from "./MyToilets";
import { Link } from "react-router-dom";


function Home({ user }) {
    if (user) {
      return <div>
        
        <h1>Welcome, {user.username}!</h1>

        <br></br>

        <MyToilets/>
        {/* show only toilets reviewed by the user */}

        <br></br>

        <h2> Discover Other Toilets </h2>
        {/* link to page with list of ALL bathrooms */}

        

        <NewBathroomForm/>
        </div>
    } else {
      return <h1>Please Login or Sign Up</h1>;
    }
  }
  
  export default Home;
  