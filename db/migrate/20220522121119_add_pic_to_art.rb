class AddPicToArt < ActiveRecord::Migration[6.1]
  def change
    add_column :arts, :pic, :string
  end
end
