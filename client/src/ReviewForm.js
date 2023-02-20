import React, { useEffect, useState } from "react";


function ReviewForm() {

    const [title, setTitle] = useState("");
    const [review, setReview] = useState("");
    const [rating, setRating] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, review, rating }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((review) => console.log(review));
            }
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label htmlFor="title">title</label>
                <input
                    type="title"
                    id="title"
                    autoComplete="off"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br></br>

                <label htmlFor="review">review</label>
                <input
                    type="review"
                    id="review"
                    autoComplete="off"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
                <br></br>
                <label htmlFor="rating">rating</label>
                <input
                    type="rating"
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