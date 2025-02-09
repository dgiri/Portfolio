class Api::V1::HealthController < ApplicationController
    skip_before_action :authenticate_request, only: [:index]

    def index
        render json: { status: 'healthy' }, status: :ok
    end
end
