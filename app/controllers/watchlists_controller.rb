class WatchlistsController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
# skip_before_action :verify_authenticity_token

def index
    render json: Watchlist.all
end

def create
    watchlist = Watchlist.create!(watchlist_params)
    render json: watchlist
end

def show
    watchlist = find_watchlist
    render json: watchlist
end

def update
    watchlist = find_watchlist
    watchlist.update!(watchlist_params)
    render json: watchlist
end

def destroy
    watchlist = find_watchlist
    watchlist.destroy
end

private

def watchlist_params
    params.permit(:address, :user_id)
end

def find_watchlist
    Watchlist.find(params[:id])
end

def render_not_found
    render json: {error: "Hmmm, there might be something wrong, I can't find any watchlist"}, status: 404
end

def render_unprocessable_entity invalid
    render json: {errors: invalid.record.errors.full_messages}, status:422
end

end
