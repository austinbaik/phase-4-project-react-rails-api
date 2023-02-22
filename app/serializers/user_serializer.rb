class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest 
  has_many :bathrooms, through: :reviews

  # def reviewed_bathrooms 
  #   reviews = Review.all 
  #   review_bathrooms = reviews.map { |r| r.bathroom }
  # end

# https://stackoverflow.com/questions/64604284/conditional-attributes-and-methods-in-rails-serializer-0-10


end
