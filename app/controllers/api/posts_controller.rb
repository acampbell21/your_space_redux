class Api::PostsController < ApplicationController
  before_action :authenticate_user!
  def index
    render json: Post.all
  end

  def show
  end

  def update
    current_user.liked_posts << params[:id].to_i
    current_user.save
  end

  def my_posts
    render json: Cat.liked(current_user.liked_cats)
  end
end
