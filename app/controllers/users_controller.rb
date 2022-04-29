class UsersController < ApplicationController

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  # skip_before_action :verify_authenticity_token
  
  def create
    user = User.create!(user_params)
    render json: user
  end

  def show
    user = find_user
    render json: user
  end

  def update
    user = find_user
    user.update!(user_params)
    render json: user
  end

  private

  def user_params
    params.permit(:email, :password, :firstName, :lastName, :phoneNumber)
  end

  def find_user
    User.find(params[:id])
  end

  def render_not_found
    render json: {error: "Hmmm, there might be something wrong, I can't find any user"}, status: 404
  end

  def render_unprocessable_entity invalid
    render json: {errors: invalid.record.errors.full_messages}, status:422
  end

end
