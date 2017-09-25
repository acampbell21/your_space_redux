class Api::ProfilesController < ApplicationController
  before_action :authenticate_user!
  def index
    render json: Profile.all
  end

  def show
  end

  def update
  end

  def my_profile
    render json: Cat.liked(current_user)
  end
end
