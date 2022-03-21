class PromoController < ApplicationController
  def index
    @articles = Article.all
    @posts = Post.all
    @hashtags = Hashtag.all
    @users = User.all
    if params.has_key?(:hashtag)
      @hashtag = Hashtag.find_by_name(params[:hashtag])
      @articles = Article.where(hashtag: @hashtag, user: @user)
    else
      @articles = Article.all.includes(:hashtag).map do
    |post|
    post.as_json(include: [:hashtag, :article_comments, :preview])
  end
  if params.has_key?(:category)
    @category = Category.find_by_name(params[:category])
    @posts = Post.where(category: @category, user: @user)
  else
    @posts = Post.all.includes(:category).map do
  |post|
  post.as_json(include: [:category,:user, :comments, :image])
end
    end
    end
  end
end
