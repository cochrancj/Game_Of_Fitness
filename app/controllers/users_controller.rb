class UsersController < ApplicationController
# New user
  def new
    @user = User.new
  end
# Create a new user with params and then redirect them to the log in page
  def create
    user = User.create user_params
    redirect_to log_in_path
  end
# This grants a user the ability to log in
  def log_in
  end
# Grabs the current sessions' user id & renders it
  def current_user
      @user = User.where :id => session[:user_id]
     render json: @user
  end
# Find the current users' id; find the card you just clicked's id; grab the mana value from the current user; grab the mana value from the clicked card; add those two numbers together; store in the users' running total of mana; render nothing because we're not linking to a separate show page.
  def update
    user = User.find session[:user_id]
    card = Card.where(:id => params[:cardid])
    user_mana = user.mana
    card_mana = card[0].mana
    new_total = user_mana + card_mana
    user.update(:mana => new_total)
    render :nothing => true
  end
# user profile - if a user is logged in (can find a session), bring up the user's info; else redirect to log in
  def profile
    if session[:user_id]
      @user = User.find session[:user_id]
    else
      redirect_to log_in_path
    end
  end
# this is where all our form junk lives so we don't get hacked.
  private
  
    def user_params
      params.require(:user).permit(:username, :email, :race, :guild, :password, :password_confirmation)
    end

end
