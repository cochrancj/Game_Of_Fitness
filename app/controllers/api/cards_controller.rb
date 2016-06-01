class Api::CardsController < ApplicationController

  def index
    render json: { cards: Card.all }
  end

end
