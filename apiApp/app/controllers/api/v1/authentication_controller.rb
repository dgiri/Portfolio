class Api::V1::AuthenticationController < ApplicationController
  skip_before_action :authenticate_request, only: [:login]

  def login
    @admin = Admin.find_by_email(params[:email])
    if @admin&.authenticate(params[:password])
      token = JsonWebToken.encode(
        admin_id: @admin.id,
        email: @admin.email  # Include email in the token payload
      )
      render json: { token: token }, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

  def logout
    @admin = Admin.find_by_email(params[:email])
    if @admin
      token = JsonWebToken.encode(
        admin_id: @admin.id,
        email: @admin.email
      )
      render json: { token: token }, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

  def me
    render json: { admin: { email: current_admin.email, is_admin: true } }, status: :ok
  end
end

