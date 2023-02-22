import React, { useEffect, useState } from "react";


function EditReview({
    title,
    id,
    review,
    rating
}) {

    const [reviewTitle, setTitle] = useState( title );
    const [updateReview, setReview] = useState( review );
    const [updateRating, setUpdatedRating] = useState( rating );

    function handleReviewChange(e) {
        setReview(e.target.value)
    }

    function handleRatingChange(e) {
        setUpdatedRating(e.target.value)
    }

    return (

        // <form onSubmit={handleSubmit}>
        <form>

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