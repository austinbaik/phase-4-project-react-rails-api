import React, { useState } from "react";

function NewBathroomForm() {

  const [address, setAddress] = useState("");
//   const [idMarker, setIdMarker] = useState("");
//   const [gender, setGender] = useState("");
//   const [location, setLocation] = useState("");
//   const [floor, setFloor] = useState("");
//   const [acccessInfo, setAccessInfo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => console.log(user));
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Add Bathroom</h1>
        <label htmlFor="Address">Address</label>
        <input
          type="text"
          id="address"
          autoComplete="off"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        {/* <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewBathroomForm;



// idMarker, gender, location, floor, accessInfo