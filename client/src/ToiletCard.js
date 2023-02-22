import ReviewForm from "./ReviewForm"
import ReviewCard from "./ReviewCard"
function ToiletCard({ toilet, user }) {


    return (

        <div>

            {/* list out the attributes here 

leave the comments, too 

*/}

            <br></br>
            Address: {toilet.address}
            <br></br>
            Identifying Marker: {toilet.id_marker}
            <br></br>
            Reviews:
            {toilet.reviews.map((review) => {
                return (

                    <ReviewCard review={review} user={user}/>
                  
                )

            })

            }
            <h3>Add Your Review</h3>
            <ReviewForm toiletInfo={toilet} user={user} />

        </div>

    )


}

export default ToiletCard;