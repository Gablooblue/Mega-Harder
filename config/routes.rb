Rails.application.routes.draw do
  devise_for :users
  resources :medicine_types
  devise_scope :user do
    root :to => 'devise/sessions#new'
  end

  resources :users do
    resources :prescriptions do
	resources :prescription_medicines
    end
    resources :transactions
  end
end
