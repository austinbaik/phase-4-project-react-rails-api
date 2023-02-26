import ReviewForm from "./ReviewForm";
import ReviewCard from "./ReviewCard";
import './App.css';

function ToiletCard({ toilet, user, updateBathroomArray }) {


    return (

        <div>
            <div>
                <h2>{toilet.address}</h2>
                Identifying Marker: {toilet.id_marker} <br></br>
                Gender: {toilet.gender}<br></br>
                Access Info: {toilet.access_info}<br></br>
                Avg Rating: {toilet.total_rating}<br></br>
                <br></br>
                Reviews:
                <div>
                    {toilet.reviews.map((review) => {
                        return (
                            <ReviewCard review={review} user={user} updateBathroomArray={updateBathroomArray} />
                        )
                    })
                    }
                    <div>
                        <h4>Add Your Review</h4>
                        <ReviewForm toiletInfo={toilet} user={user} updateBathroomArray={updateBathroomArray} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToiletCard;