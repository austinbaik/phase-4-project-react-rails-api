import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewBathroomForm( {setToilets } ) {

    const navigate = useNavigate();
    const [address, setAddress] = useState("");
    const [id_marker, setIdMarker] = useState("");
    const [gender, setGender] = useState("");
    //   const [location, setLocation] = useState("");
    const [floor, setFloor] = useState("");
    const [access_info, setAccessInfo] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/bathrooms", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ address, id_marker, gender, floor, access_info }),
        }).then((r) => {
            if (r.ok) {
                console.log(r)
                r.json().then((toilet) => {
                    setToilets(allToilets => [...allToilets, toilet]) 
                    console.log('Successfully added toilet', toilet)}
                    );
                                navigate("/alltoilets");

            } else {
                console.log("new bathroom error response", r)
            }

        });
    }

    return (
        <div >
            <h2 align='center'> Add Bathroom: </h2>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="Address" >Address</label>
                <input 
                    type="text"
                    id="address"
                    autoComplete="off"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter Street Address"
                />
                <label htmlFor="id_marker">Identifying Marker</label>
                <input
                    type="text"
                    id="id_marker"
                    autoComplete="off"
                    value={id_marker}
                    onChange={(e) => setIdMarker(e.target.value)}
                    placeholder="Include Easily Identifying Marker"
                />
          
                <label htmlFor="gender">Gender</label>
                <input
                    type="text"
                    id="gender"
                    autoComplete="off"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                />

                <label htmlFor="floor">Floor</label>
                <input
                    type="text"
                    id="floor"
                    autoComplete="off"
                    value={floor}
                    onChange={(e) => setFloor(e.target.value)}
                    placeholder="i.e. 4th Floor"
                />

                <label htmlFor="access_info">Access Info</label>
                <input
                    type="text"
                    id="access_info"
                    autoComplete="off"
                    value={access_info}
                    onChange={(e) => setAccessInfo(e.target.value)}
                    placeholder="i.e. Door Code or Employee can open door"
                />

                <button type="submit">Submit</button> 
                </div>
            </form>
        </div>
    );
}

export default NewBathroomForm;



// idMarker, gender, location, floor, accessInfo