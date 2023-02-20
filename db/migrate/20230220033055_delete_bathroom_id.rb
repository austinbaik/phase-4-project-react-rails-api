class DeleteBathroomId < ActiveRecord::Migration[6.1]
  def change
    remove_column(:reviews, :bathroom_id)
  end
end
