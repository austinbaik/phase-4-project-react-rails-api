import React, { useState } from "react";


function EditReview({
    title,
    id,
    review,
    rating,
    userID, 
    setIsEditing,
    updateBathroomArray
}) {

    // const [reviewTitle, setTitle] = useState(title);
    const [updateReview, setReview] = useState(review);
    const [updateRating, setUpdatedRating] = useState(rating);

    function handleReviewChange(e) {
        setReview(e.target.value)
    }

    function handleRatingChange(e) {
        setUpdatedRating(e.target.value)
    }


    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/users/${userID}/reviews/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({

                review: updateReview,
                rating: updateRating

            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((bathroom) => updateBathroomArray(bathroom, "edit"))
            }
                    
            setIsEditing(false)
        }
        )
    }

    // function apiReview(bathroom) {
    //     console.log("success", bathroom);
    // }


    return (

        <form onSubmit={handleSubmit}>

            <h2> Edit {title} </h2>

            <label>
                Review:
                <input type="text" name='review' onChange={handleReviewChange} value={updateReview} />
            </label>
            <label>
                Rating:
                <input type="text" name='review' onChange={handleRatingChange} value={updateRating} />
            </label>

            <button type="submit">Submit</button>


        </form>




    )



}

export default EditReview