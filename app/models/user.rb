class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User

  serialize :liked_cats, Array

  def self.liked(ids)
    where("id IN (?)", ids)
  end

  def self.random_cats(ids)
    Cat.where("id NOT IN (?)", ids).order("RANDOM()")
  end
end
