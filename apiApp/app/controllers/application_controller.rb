class ApplicationController < ActionController::API
    before_action :authenticate_request
    attr_reader :current_admin

    private

    def authenticate_request
        header = request.headers['Authorization']
        header = header.split(' ').last if header
        decoded = JsonWebToken.decode(header)

        if decoded.present?
            @current_admin = Admin.find(decoded[:admin_id])
        else
            render json: { error: 'unauthorized' }, status: :unauthorized
        end
    rescue
        render json: { error: 'unauthorized' }, status: :unauthorized
    end
end
