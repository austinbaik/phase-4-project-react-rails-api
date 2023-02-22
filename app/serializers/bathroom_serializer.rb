class BathroomSerializer < ActiveModel::Serializer
  attributes :id, :address, :id_marker, :location, :total_rating, :access_info, :floor, :gender, :reviews 
end
