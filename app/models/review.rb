class Review < ApplicationRecord
  belong_to :user
  belongs_to :bathroom
end
