import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function AllBathrooms() {

    const [allToilets, setToilets] = useState([])

console.log(allToilets)

    useEffect(() => {
        // console.log("brandsArr", brandsArr)
        // console.log("brandsArr.l", brandsArr.length)

        fetch("/alltoilets") 
        .then((r) => r.json())
        .then((allToilets) => setToilets(allToilets));
    }, [])


    return (

        <div>

PLACEHOLDER 
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