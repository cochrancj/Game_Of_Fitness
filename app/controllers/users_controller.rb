class UsersController < ApplicationController
  # a new user
  def new
    @user = User.new
  end

  # create a new user with params - add ability to redirect to log in
  def create
    user = User.create user_params
    redirect_to log_in_path
  end

  # ability to log in
  def log_in
  end

  def current_user
     render json: session[:user_id]
  end


  def update
    @user = User.find session[:user_id]
    # @user = User.where(session[:user_id])

    @card = Card.where(:id => params[:cardid])
  # binding.pry
    # @user.mana ++ @card.mana 
    # @user.save
  end
  # find current user; find current score; take that number and add to the mana passed in and store that information in the user.

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
