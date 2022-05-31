class AddPictureToStory < ActiveRecord::Migration[6.1]
  def change
    add_column :stories, :picture, :string
  end
end
