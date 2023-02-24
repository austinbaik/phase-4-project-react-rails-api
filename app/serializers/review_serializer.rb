class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :review, :rating, :updated_at, :user_id, :bathroom_id
end
