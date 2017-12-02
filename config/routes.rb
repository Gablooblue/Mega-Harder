Rails.application.routes.draw do
  devise_for :users
  resources :medicine_types
  get 'hello_world', to: 'hello_world#index'
end
