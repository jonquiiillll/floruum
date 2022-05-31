class RemoveTypeFromArts < ActiveRecord::Migration[6.1]
  def change
    remove_column :arts, :type, :integer
  end
end
