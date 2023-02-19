class ReviewsController < ApplicationController
    belong_to :user
    belongs_to :bathroom 
end
