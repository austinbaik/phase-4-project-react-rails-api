import React, { useEffect, useState } from "react";
import EditReview from "./EditReview";

function ReviewCard({ review, user }) {

    const [isEditing, setIsEditing] = useState(false);

    //**NEED TO ADD CLIENT-SIDE VALIDATION */

    const handleDeleteClick = () => console.log('delete clicked')

    return (
        <div>
            <ul>
                Title: {review.title}
                <br></br>
                Review: {review.review}
                <br></br>
                Rating: {review.rating}
                <br></br>
                Updated: {review.updated_at}
            </ul>

            {isEditing ? (
                <EditReview
                    title={review.title}
                    id={review.id}
                    review={review.review}
                    rating={review.rating}
                    // updateWatchToStateArr={updateWatchToStateArr}
                    setIsEditing={setIsEditing}
                />
            ) : (null

            )}
            {user.id == review.user_id ? (
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


        </div >)
}

export default ReviewCard

