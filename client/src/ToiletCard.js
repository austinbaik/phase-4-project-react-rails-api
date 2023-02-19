
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

        </div>
    )


}

export default ToiletCard