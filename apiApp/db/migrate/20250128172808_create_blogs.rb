class CreateBlogs < ActiveRecord::Migration[8.0]
  def change
    create_table :blogs do |t|
      t.string :title
      t.text :content
      t.boolean :published, default: false
      t.datetime :published_date
      t.string :tags, array: true, default: []
      t.references :admin, foreign_key: true
      t.string :image_url

      t.timestamps
    end
  end
end
