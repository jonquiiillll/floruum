class CreateMarks < ActiveRecord::Migration[6.1]
  def change
    create_table :marks do |t|
      t.string :commenter
      t.text :body
      t.references :art, null: false, foreign_key: true

      t.timestamps
    end
  end
end
