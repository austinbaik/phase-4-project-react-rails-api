import React, { useState } from "react";
import EditReview from "./EditReview";

function ReviewCard({ review, user, updateBathroomArray }) {

    const [isEditing, setIsEditing] = useState(false);

    //**NEED TO ADD CLIENT-SIDE VALIDATION */

    const handleDeleteClick = (e) => {
        e.preventDefault();
        fetch(`/users/${user.id}/reviews/${review.id}`, {
            method: "DELETE"
        }).then((r) => {
            if (r.ok) {
                r.json().then((bathroomResponse) => updateBathroomArray(bathroomResponse, "delete"))
            } else {
                r.json().then((err) => console.log(err))
            }
        }
        )
    }

    console.log("review", review)
    console.log("user", user)

    return (
        <div>
            <ul key={review.id}>
                Title: {review.title}
                <br></br>
                Review: {review.review}
                <br></br>
                Rating: {review.rating}
                <br></br>
                Updated: {review.updated_at}

                {(user.id || user) === review.user_id ? (
                    <div>
                        <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
                            <span role="img" aria-label="edit">
                                ✏️
                            </span>
                        </button>

                        <button onClick={handleDeleteClick}>
                            <span role="img" aria-label="delete">
                                🗑
                            </span>
                        </button>
                    </div>
                ) : (null)
                }
            </ul>

            {isEditing ? (
                <EditReview
                    title={review.title}
                    id={review.id}
                    review={review.review}
                    rating={review.rating}
                    userID={user.id}
                    setIsEditing={setIsEditing}
                    updateBathroomArray={updateBathroomArray}

                />
            ) : (null
            )}

        </div >)
}

export default ReviewCard

