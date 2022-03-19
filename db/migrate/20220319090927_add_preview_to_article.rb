class AddPreviewToArticle < ActiveRecord::Migration[6.1]
  def change
    add_column :articles, :preview, :string
  end
end
