import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ToiletCard from "./ToiletCard";



function AllBathrooms({ allToilets, user, updateBathroomArray }) {

    console.log('arr in allbath', allToilets)

    return (

        <div>

            <h1>   Explore Bathrooms    </h1>
            {allToilets.map((toilet) => {

                return (
                    <ToiletCard toilet={toilet} user={user} updateBathroomArray={updateBathroomArray}/>
                )
            })}


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