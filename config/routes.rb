Rails.application.routes.draw do
  resources :prescriptions
  devise_for :users
  resources :medicine_types
  devise_scope :user do
    root :to => 'devise/sessions#new'
  end
end
