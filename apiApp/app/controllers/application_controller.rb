class ApplicationController < ActionController::API
    before_action :set_cors_headers
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

    def set_cors_headers
        headers['Access-Control-Allow-Origin'] = '*'
        headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
        headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization, Token'
    end
end
