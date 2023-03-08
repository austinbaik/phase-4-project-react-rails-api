import React from "react";
import ToiletCard from "./ToiletCard";


function MyToilets({ user, updateBathroomArray }) {


    console.log("user in my toilets", user)


    if (user) {
        return (

            <div>
                <h1>My Toilets</h1>

                <div>
                    <ul>{user.toilets.map((toilet) => {
                        return (
                            <ToiletCard key={toilet.id} toilet={toilet} user={user} updateBathroomArray={updateBathroomArray} />
                            //RETURNING THE SAME OBJECT TWICE IF >1 REview 
                        )
                    })}
                    </ul>
                </div>

            </div>
        )
    } else {
        return (<div> Loading... </div>)
    }
}

export default MyToilets;




