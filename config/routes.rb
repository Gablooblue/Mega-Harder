Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  devise_for :users
  resources :medicine_types
  devise_scope :user do
    root :to => 'devise/sessions#new'
  end

  resources :users do
    get 'transactions'
    resources :prescriptions do
	resources :prescription_medicines
    end
  end
end
