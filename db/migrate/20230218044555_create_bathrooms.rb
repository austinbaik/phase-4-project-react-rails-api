class CreateBathrooms < ActiveRecord::Migration[6.1]
  def change
    create_table :bathrooms do |t|
      t.string :address
      t.string :id_marker
      t.string :gender 
      t.string :location
      t.string :floor
      t.float :total_rating
      t.string :access_info 
      t.timestamps
    end
  end
end
