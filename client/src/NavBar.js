import React from "react";
import { Link } from "react-router-dom";
import "./Page.css"

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
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
          <button onClick={handleLogoutClick}>Logout</button>
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
