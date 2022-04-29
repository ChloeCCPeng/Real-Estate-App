class OffersController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
# skip_before_action :verify_authenticity_token

def create
    offer = Offer.create!(offer_params)
    render json: offer
end

def show
    offer = find_offer
    render json: offer
end

def update
    offer = find_offer
    offer.update!(offer_params)
    render json: offer
end

def destroy
    offer = find_offer
    offer.destroy
end

private

def offer_params
    params.permit(:amount, :user_id)
end

def find_offer
    Offer.find(params[:id])
end

def render_not_found
    render json: {error: "Hmmm, there might be something wrong, I can't find any offer"}, status: 404
end

def render_unprocessable_entity invalid
    render json: {errors: invalid.record.errors.full_messages}, status:422
end

end
