class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :title
      t.string :review
      t.integer :rating 
      t.string :user_id
      t.string :bathroom_id

      t.timestamps
    end
  end
end
