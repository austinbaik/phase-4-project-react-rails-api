class User < ApplicationRecord
  has_secure_password 

  has_many :reviews
  has_many :bathrooms, through: :reviews

  validates :username, presence: true

end
