# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
admin = Admin.find_by(email: 'giri.debu@gmail.com')

unless admin
  Admin.create!(
      email: 'giri.debu@gmail.com',
      password: 'abc!23',
      password_confirmation: 'abc!23'
  )
end

Blog.create!(
    title: 'My First Blog',
    content: 'This is my first blog',
    published: true,
    published_date: Date.today,
    tags: ['Technology', 'Programming'],
    image_url: 'https://via.placeholder.com/150',
    admin_id: Admin.first.id
)

# Project.create!(
#     title: 'My First Project',
#     description: 'This is my first project',
#     technologies: ['Ruby', 'Rails'],
#     admin: Admin.first
# )

# About.create!(
#     name: 'John Doe',
#     email: 'john.doe@example.com',
#     skills: ['Ruby', 'Rails'],
#     admin: Admin.first
# )
