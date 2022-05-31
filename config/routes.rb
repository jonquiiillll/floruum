Rails.application.routes.draw do

  resources :sorts
  resources :types
  get 'search/index'
  resources :hashtags
  resources :follows
  resources :categories
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users

  resources :users do
    resources :points
  end

  post 'users/:id/follow', to: "users#follow", as: "follow_user"
  post 'users/:id/unfollow', to: "users#unfollow", as: "unfollow_user"

  resources :subscribers

  get 'articles', to: 'articles#index'
  get 'promo', to: 'promo#index'
  get 'stories', to: 'stories#index'
  get 'answers', to: 'answers#index'
  get 'arts', to: 'arts#index'
  get 'status', to: 'status#index'
  get 'about', to: 'about#index'
  get 'posts', to: 'posts#index'
  get 'search', to: 'search#index'
  get 'users/:id/following', :to => "users#following", :as => :following

  root 'promo#index'

resources :posts do
	resources :comments
  resources :likes
  resources :favorites
end


resources :articles do
  resources :article_comments
end

resources :answers do
    resources :comments
end

resources :arts do
    resources :marks
end

resources :stories do
	resources :points
  resources :additions
end
resources :points do
  resources :users
end




get 'users', to: 'users#index'
get 'users/:id' => 'users#show'
delete 'users/:id', to: 'users#destroy'
end
