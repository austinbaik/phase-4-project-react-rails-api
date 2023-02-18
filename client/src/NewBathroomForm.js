import React, { useState } from "react";

function NewBathroomForm() {

    const [address, setAddress] = useState("");
    const [id_marker, setIdMarker] = useState("");
    const [gender, setGender] = useState("");
    //   const [location, setLocation] = useState("");
    const [floor, setFloor] = useState("");
    const [access_info, setAccessInfo] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ address, id_marker, gender, floor, access_info }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((toilet) => console.log(toilet));
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
                <br>
                </br>
                <label htmlFor="id_marker">Identifying Marker</label>
                <input
                    type="id_marker"
                    id="id_marker"
                    autoComplete="off"
                    value={id_marker}
                    onChange={(e) => setIdMarker(e.target.value)}
                />
                <br>
                </br>
                <label htmlFor="gender">Gender</label>
                <input
                    type="gender"
                    id="gender"
                    autoComplete="off"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                />

                <br>
                </br>
                <label htmlFor="floor">Floor</label>
                <input
                    type="floor"
                    id="floor"
                    autoComplete="off"
                    value={floor}
                    onChange={(e) => setFloor(e.target.value)}
                />

                <br>
                </br>

                <label htmlFor="access_info">Access Info</label>
                <input
                    type="access_info"
                    id="access_info"
                    autoComplete="off"
                    value={access_info}
                    onChange={(e) => setAccessInfo(e.target.value)}
                />

                <br></br>


                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default NewBathroomForm;



// idMarker, gender, location, floor, accessInfo