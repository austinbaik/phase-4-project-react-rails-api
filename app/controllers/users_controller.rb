class UsersController < ApplicationController
  # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  # rescue_from ActiveRecord::RecordInvalid

  # , with: :render_unprocessable_entity_response

  def create
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id #still don't quite understand this
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  #   session[:user_id] = user.id
  #   #   still don't quite understand this
  #   #   Sessions work behind the scenes because of the bycrypt gem. We don't need to pass session within the render json, because session will be an object that connects with the application when you install the gem
  #   render json: user, status: :created
  # end

  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  private

  def user_params


     params.permit(:username, :password, :password_confirmation)
    
    # params.require(:user).permit(:username, :password, :password_confirmation)
    #permit allows for key utilization; require mandates that parameter exists --> bc goes through User Controller
  end
end
