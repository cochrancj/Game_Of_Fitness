class GameController < ApplicationController

  def index
    @user = session[:user_id]
  end
end
