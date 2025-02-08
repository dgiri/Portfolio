class Api::V1::BlogsController < ApplicationController
    skip_before_action :authenticate_request, only: [:show, :published, :drafts]
    before_action :set_blog, only: [:show, :update, :destroy]


    def published
        @blogs = Blog.where(published: true)
                    .order(published_date: :desc)
        render json: @blogs
    end

    def drafts
        @blogs = Blog.where(published: false)
                    .order(updated_at: :desc)
        render json: @blogs
    end

    def show
        @blog = Blog.find(params[:id])
        Rails.logger.info("================================")
        Rails.logger.info("Blog: #{@blog.inspect}")
        Rails.logger.info("================================")
        render json: @blog, status: :ok
    end

    def create
        @blog = Blog.new(blog_params)
        @blog.admin = current_admin
        if @blog.save
            render json: @blog, status: :created
        else
            render json: @blog.errors, status: :unprocessable_entity
        end
    end

    def update
        @blog = Blog.find(params[:id])
        @blog.update(blog_params)
        render json: @blog, status: :ok
    end

    def destroy
        @blog = Blog.find(params[:id])
        @blog.destroy
        render json: { message: 'Blog deleted successfully' }, status: :ok
    end

    private

    def set_blog
        @blog = Blog.find(params[:id])
    end

    def blog_params
        params.require(:blog).permit(:title, :content, :published_date, :tags)
    end
end

