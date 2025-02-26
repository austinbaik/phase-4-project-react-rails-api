class ReviewsController < ApplicationController
  before_action :authorize

  def create
    user = User.find(session[:user_id])
    review = user.reviews.create(review_params)
    if review.valid?
      bathroom = review.bathroom

      bathroom.calc_rating

      #still don't quite understand this
      #   Sessions work behind the scenes because of the bycrypt gem. We don't need to pass session within the render json, because session will be an object that connects with the application when you install the gem

      render json: bathroom, status: :created
      #render 'bathroom' object, which includes all the reviews so we can update state easily
    else
      render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # also need to authenticate!
  def update
    edit_params
    user = User.find(session[:user_id])
    review = user.reviews.find(params[:id])
    bathroom = review.bathroom
    review.update(
      review: params[:review],
      rating: params[:rating],
    )
    if review.valid?
      #return the entire bathroom
      bathroom.calc_rating
      render json: bathroom, status: :ok
    else
      render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # also need to authenticate!
  def destroy
    user = User.find(session[:user_id])
    review = user.reviews.find(params[:id])
    bathroom = review.bathroom
    review.destroy
    bathroom.calc_rating
    render json: review.bathroom, status: :ok
  end

  # *****how do I associate with the User who is creating the comment?******

  private

  def review_params
    params.permit(:title, :review, :rating, :bathroom_id)
  end

  def edit_params
    params.permit(:review, :rating, :id, :review)
  end

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end
end
