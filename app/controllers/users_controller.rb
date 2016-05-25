class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    user = User.create user_params
    redirect_to log_in_path
  end

  def log_in
  end

  def profile

    # if you're refactoring, pull all this logic out and substitute with:

    # @user = current_user

    # check to see if user is logged in:
    if session[:user_id]
      @user = User.find session[:user_id]
    else
      redirect_to log_in_path
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
