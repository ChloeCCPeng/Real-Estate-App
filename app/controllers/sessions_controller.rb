class SessionsController < ApplicationController
    #POST /login
   def create
     user = User.find_by(username: params[:username])
     if user&.authenticate(params[:password])
       session[:user_id] = user.id
       render json: user, status: :ok
     else
       render json: {errors: ["Incorrect password or username"]}, status: :unauthorized
     end
   end
 
   #DELETE /logout
   def destroy
     if session[:user_id]
       session.delete(:user_id)
       head :no_content
     else
       render json: {errors: ["No user to log out"]}, status: :unauthorized
     end
   end
 end