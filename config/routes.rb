Rails.application.routes.draw do
  resources :articles
  resources :follows
  resources :categories
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users

  resources :users
  post 'users/:id/follow', to: "users#follow", as: "follow_user"
  	post 'users/:id/unfollow', to: "users#unfollow", as: "unfollow_user"

  resources :subscribers

  get 'articles', to: 'articles#index'
  get 'promo', to: 'promo#index'
  get 'answers', to: 'answers#index'
  get 'status', to: 'status#index'
  get 'about', to: 'about#index'
  get 'posts', to: 'posts#index'
  get 'users/:id/following', :to => "users#following", :as => :following

  root 'promo#index'

resources :posts do
	resources :comments
  resources :likes
  resources :favorites
end

resources :answers do
    resources :comments
end


get 'users', to: 'users#index'
get 'users/:id' => 'users#show'
delete 'users/:id', to: 'users#destroy'
end
