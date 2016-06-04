class Api::CardsController < ApplicationController
# Gimme my cards, Jason!
  def index
    render json: { cards: Card.all }
  end

end
