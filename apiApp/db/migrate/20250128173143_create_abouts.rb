class CreateAbouts < ActiveRecord::Migration[8.0]
  def change
    create_table :abouts do |t|
      t.text :intro
      t.string :location
      t.boolean :available_for_work
      t.string :skills, array: true, default: []
      t.references :admin, foreign_key: true

      t.timestamps
    end
  end
end
