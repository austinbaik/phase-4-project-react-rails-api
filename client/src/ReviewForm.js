import React, { useState } from "react";


function ReviewForm( {toiletInfo, user, updateBathroomArray } ) {

    const [title, setTitle] = useState("");
    const [review, setReview] = useState("");
    const [rating, setRating] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title, 
                review, 
                rating,
                bathroom_id :toiletInfo.id,
                user_id : user.id
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((review) => updateBathroomArray(review));
            }
        });
        setTitle("")
        setReview("")
        setRating("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    autoComplete="off"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br></br>

                <label htmlFor="review">Review</label>
                <input
                    type="text"
                    id="review"
                    autoComplete="off"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
                <br></br>
                <label htmlFor="rating">Rating</label>
                <input
                    type="text"
                    id="rating"
                    autoComplete="off"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />
                <br></br>

                <button type="submit">Submit</button>
            </form>

        </div>


    )


}




export default ReviewForm;