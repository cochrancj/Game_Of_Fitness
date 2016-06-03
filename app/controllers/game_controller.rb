class GameController < ApplicationController

  def index
    @user = User.where :id => session[:user_id]
  end
end
