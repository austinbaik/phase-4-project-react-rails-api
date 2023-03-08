import React from "react";
// import { Link } from "react-router-dom";
import ToiletCard from "./ToiletCard";



function AllBathrooms({ allToilets, user, updateBathroomArray }) {

    // console.log('allToilets Array in AllBathroom', allToilets)
    // console.log('userToilets', user.toilets)

    return (

        <div>

            <h1>   Explore Bathrooms    </h1>
            <ul>{allToilets.map((toilet) => {
                return (
                    <ToiletCard key={toilet.id} toilet={toilet} user={user} updateBathroomArray={updateBathroomArray} />
                )
            })}
            </ul>

            {/* 
            <Link to={`/brands/${brand.id}`} brand={brand}>
                

                <button class="center-img">
                    <img class="img"
                        src={brand.url}
                        alt={brand.url}
                    />
                </button>

            </Link> */}

        </div>
    )



}


export default AllBathrooms; 