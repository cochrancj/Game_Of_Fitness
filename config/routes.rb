Rails.application.routes.draw do

  get 'game/index'
# Routes for users stuff
  root 'welcome#index'
  resources :users, only: [:new, :create, :update]
# Sessions & users stuff
  get '/users/log_in' => "users#log_in", as: :log_in
  get '/users/profile' => "users#profile", as: :profile
  get  '/users/current_user' => "users#current_user"
  post '/sessions' => "sessions#create", as: :cration_station
  delete '/sessions' => "sessions#destroy", as: :deletion_station
# API stuff
  namespace :api do
    resources :cards
  end

end
