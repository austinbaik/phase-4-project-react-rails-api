import NewBathroomForm from "./NewBathroomForm";
import MyToilets from "./MyToilets";


function Home({ user }) {
    if (user) {
      return <div>
        
        <h1>Welcome, {user.username}!</h1>

        <br></br>

        <MyToilets/>

        <br></br>

        <NewBathroomForm/>
        </div>
    } else {
      return <h1>Please Login or Sign Up</h1>;
    }
  }
  
  export default Home;
  