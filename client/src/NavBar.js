import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Page.css"


function NavBar({ user, setUser }) {

  const navigate = useNavigate();

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        navigate("/")
        setUser(null)
        
      } 
    });
  }

  return (
    <header  align='center'>

      <h1> SF Bathroom Finder </h1>

      <div >

        <button>
          <Link to="/">Home</Link>
        </button>

        {user ? (
          <>
          <button> <Link to="/mytoilets">My Toilets</Link>  </button>
          <button onClick={handleLogoutClick}> Logout </button>
          </>

        ) : (
          <>
            <button>
              <Link to="/signup">Signup</Link>
            </button>
            
            <button>
              <Link to="/login">Login</Link>
            </button>
          </>
        )}
   

      </div>
    </header>
  );
}

export default NavBar;
