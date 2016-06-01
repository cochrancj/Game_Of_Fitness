class SessionsController < ApplicationController
  def create
    # grab the form fields
    username = params[:username]
    password = params[:password]
    # email = params[:email]
    # class = params[:class]
    # guild = params[:guild]
    # confirm that they're right
    user = User.find_by username: username
    # if the user and their password matches, redirect to profile page; else send back to log in
    if user && user.authenticate( password )
      session[:user_id] = user.id
      redirect_to profile_path
    else
      redirect_to log_in_path
    end

  end

  #destroy a session
  def destroy
    session[:user_id] = nil
    redirect_to log_in_path
  end


end
