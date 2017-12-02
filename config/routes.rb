Rails.application.routes.draw do
  resources :prescription_medicines
  get 'hello_world', to: 'hello_world#index'
  resources :prescriptions
  devise_for :users
  resources :medicine_types
  devise_scope :user do
    root :to => 'devise/sessions#new'
  end
end
