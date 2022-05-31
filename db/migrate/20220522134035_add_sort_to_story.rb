class AddSortToStory < ActiveRecord::Migration[6.1]
  def change
    add_reference :stories, :sort, null: false, foreign_key: true
  end
end
