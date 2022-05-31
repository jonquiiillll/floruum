class CreateAdditions < ActiveRecord::Migration[6.1]
  def change
    create_table :additions do |t|
      t.string :commenter
      t.text :body
      t.references :story, null: false, foreign_key: true

      t.timestamps
    end
  end
end
