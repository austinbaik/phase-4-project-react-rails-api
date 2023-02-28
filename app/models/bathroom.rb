class Bathroom < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews

  validates :address, presence: true
  validates :gender, presence: true
  validates :floor, presence: true

  def calc_rating
    if self.reviews.count(:rating) == 0
      return self.total_rating
    else
      sum = self.reviews.sum(:rating)
      count = self.reviews.count(:rating)
      avg = sum / count.to_f  
      self.total_rating = avg.round(2)
      self.save
    end
  end
end
