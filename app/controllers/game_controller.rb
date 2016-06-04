class GameController < ApplicationController
# Game sessions stuff
  def index
    @user = User.where :id => session[:user_id]
  end
end
