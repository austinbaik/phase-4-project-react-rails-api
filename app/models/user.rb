class User < ApplicationRecord
  has_many :reviews
  has_many :bathrooms, through: :reviews

end
