# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin Ajax requests.

# Read more: https://github.com/cyu/rack-cors

# Rails.application.config.middleware.insert_before 0, Rack::Cors do
#   allow do
#     origins "http://localhost:3000"

#     resource "*",
#       headers: :any,
#       methods: [:get, :post, :put, :patch, :delete, :options, :head],
#       credentials: true
#   end
# end

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # origins [
    #   'http://localhost:3000',
    #   'http://127.0.0.1:3000',
    #   'https://portfolio-176d.onrender.com',
    #   'http://ec2-54-83-120-36.compute-1.amazonaws.com:3000',
    #   'http://ec2-54-83-120-36.compute-1.amazonaws.com:80'
    # ]
    origins '*'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: false               # If you're using cookies/sessions
  end
end
