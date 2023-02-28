class Review < ApplicationRecord
  belongs_to :user
  belongs_to :bathroom


  validates :title, presence: true
  validates :review, presence: true
  validates :rating, numericality: { only_integer: true, less_than: 6 }

end
 