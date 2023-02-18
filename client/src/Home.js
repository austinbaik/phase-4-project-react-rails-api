import NewBathroomForm from "./NewBathroomForm";


function Home({ user }) {
    if (user) {
      return <div>
        
        <h1>Welcome, {user.username}!</h1>
        <NewBathroomForm/>
        </div>
    } else {
      return <h1>Please Login or Sign Up</h1>;
    }
  }
  
  export default Home;
  