class BathroomsController < ApplicationController

    def create
        
        bathroom = Bathroom.create(toilet_params)
        if bathroom.valid?
  
          render json: bathroom, status: :created
        else
          render json: { errors: bathroom.errors.full_messages }, status: :unprocessable_entity
        end
      end
    
      private
    
      def toilet_params
        params.permit(:address)
        #permit allows for key utilization; require mandates that parameter exists --> bc goes through User Controller
      end
      
      
end
