class ReviewsController < ApplicationController
  
    def create
    review = Review.create(review_params)
    if review.valid?
         #still don't quite understand this
        #   Sessions work behind the scenes because of the bycrypt gem. We don't need to pass session within the render json, because session will be an object that connects with the application when you install the gem
  
        render json: review, status: :created
      else
        render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
      end
  end


#   def destroy 

#     review = Review.find(:id)
#     bathroom = review.bathroom.find_by(bathroom_id)
#     review.destroy
#     render json :bathroom     

#   end 
#same principal for the update route 


  # *****how do I associate with the User who is creating the comment?******

  private

  def review_params
    params.permit(:title, :review, :rating, :user_id, :bathroom_id)
  end

end
