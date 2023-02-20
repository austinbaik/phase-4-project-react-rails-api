import ReviewForm from "./ReviewForm"
function ToiletCard({ toilet }) {


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
            <h3>Add Your Review</h3>
            <ReviewForm/>

        </div>
        
    )


}

export default ToiletCard;