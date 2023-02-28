import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from './Error.js'

function NewBathroomForm({ setToilets }) {

    const navigate = useNavigate();
    const [address, setAddress] = useState("");
    const [id_marker, setIdMarker] = useState("");
    const [gender, setGender] = useState("");
    //   const [location, setLocation] = useState("");
    const [floor, setFloor] = useState("");
    const [access_info, setAccessInfo] = useState("");
    const [errors, setErrors] = useState([]);

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
                    console.log('Successfully added toilet', toilet)
                }
                );
                navigate("/alltoilets");

            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        });
    }

    return (
        <div >
            <h2 align='center'> Add Bathroom: </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Address" >Address (required) </label>
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

                    <label htmlFor="gender">Gender (required)</label>
                    <input
                        type="text"
                        id="gender"
                        autoComplete="off"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        placeholder="Male, Female, Gender-neutral"
                    />

                    <label htmlFor="floor">Floor (required)</label>
                    <input
                        type="text"
                        id="floor"
                        autoComplete="off"
                        value={floor}
                        onChange={(e) => setFloor(e.target.value)}
                        placeholder="i.e. 4th Floor"
                    />

                    <label htmlFor="access_info">Access Info (if applicable)</label>
                    <input
                        type="text"
                        id="access_info"
                        autoComplete="off"
                        value={access_info}
                        onChange={(e) => setAccessInfo(e.target.value)}
                        placeholder="i.e. Door Code or Employee can open door"
                    />

                    <button type="submit">Submit</button>

                    <div>
                        {errors.map((err) => (
                            <Error key={err} err={err} />
                        )
                        )}
                    </div>

                </div>
            </form>
        </div>
    );
}

export default NewBathroomForm;



// idMarker, gender, location, floor, accessInfo