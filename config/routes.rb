Rails.application.routes.draw do
  resources :subscribers
  get 'promo', to: 'promo#index'
  get 'about', to: 'about#index'
  get 'posts', to: 'posts#index'

  root 'promo#index'
  resources :posts do
	resources :comments
end
end
