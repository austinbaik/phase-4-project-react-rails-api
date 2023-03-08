class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :toilets 
  # has_many :bathrooms, through: :reviews

  # make custom attributes method  
  def toilets 
    # byebug 
    uniq_arr = object.bathrooms.uniq 
#make the array unique 
    return uniq_arr
  end 

  # def reviewed_bathrooms 
  #   reviews = Review.all 
  #   review_bathrooms = reviews.map { |r| r.bathroom }
  # end

# https://stackoverflow.com/questions/64604284/conditional-attributes-and-methods-in-rails-serializer-0-10


end
