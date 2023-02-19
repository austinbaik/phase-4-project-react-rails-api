class User < ApplicationRecord
    has_many :bathrooms through :reviews 
    has_many :reviews 
end
