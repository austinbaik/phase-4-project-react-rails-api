class BathroomsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  # added rescue_from
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response



  def show_many_reviews 
#localhost:3000/highlyreviewedbathrooms/{2}
# where the suffix is the number of reviews or more 
  bathrooms = Bathroom.all 
  return_bathrooms = bathrooms.select {|b| b.reviews.count >= params[:number].to_i} 
  render json: return_bathrooms 
  end 

  def create
    bathroom = Bathroom.create!(toilet_params)
    render json: bathroom, status: :created
  end

  def index
    bathrooms = Bathroom.all
    render json: bathrooms
  end

  private

  def toilet_params
    params.permit(:address, :id_marker, :gender, :floor, :access_info)
    #permit allows for key utilization; require mandates that parameter exists --> bc goes through User Controller
  end
  

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end


end
