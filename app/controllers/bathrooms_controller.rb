class BathroomsController < ApplicationController

    def create
        bathroom = Bathroom.create(toilet_params)
        
        if bathroom.valid?
  
          render json: bathroom, status: :created
        else
          render json: { errors: bathroom.errors.full_messages }, status: :unprocessable_entity
        end
      end


      def show 
        bathrooms = Bathroom.all 
        render json: bathrooms 
      end
    
      private
    
      def toilet_params
        params.permit(:address, :id_marker, :gender, :floor, :access_info)
        #permit allows for key utilization; require mandates that parameter exists --> bc goes through User Controller
      end
      
      
end
