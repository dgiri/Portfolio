class CreateProjects < ActiveRecord::Migration[8.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.text :description
      t.string :company
      t.string :duration
      t.string :image_url
      t.references :admin, foreign_key: true
      t.string :technologies, array: true, default: []

      t.timestamps
    end
  end
end
