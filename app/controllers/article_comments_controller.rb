class ArticleCommentsController < ApplicationController
  def create
  		@article = Article.find(params[:article_id])
  		@article_comments = @article.article_comments.create(params[:article_comments].permit(:commenter, :body))
  		redirect_to article_path(@article)
  	end
  end
