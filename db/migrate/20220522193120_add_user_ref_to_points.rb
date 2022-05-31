class AddUserRefToPoints < ActiveRecord::Migration[6.1]
  def change
    add_reference :points, :user, null: false, foreign_key: true
  end
end
