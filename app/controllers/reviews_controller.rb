class ReviewsController < ApplicationController

    def create 
        review = Review.create(review_params)
        

    end 
# how do I associate with the User who is creating the comment? 

end



=> #<Review id: nil, title: nil, review: nil, rating: nil, created_at: nil, updated_at: nil, user_id: nil, bathroom_id: nil> 

private review_params 
    params.permit(:title, :review, :rating)
end  