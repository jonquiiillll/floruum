class ArticleCommentsController < ApplicationController
  def create
  		@article = Article.find(params[:article_id])
  		@article_comment = @article.article_comments.create(params[:article_comment].permit(:commenter, :body))
  		redirect_to article_path(@article)
  	end

  def destroy
  		@article = Article.find(params[:article_id])
  		@article_comment = @article.article_comments.find(params[:id])
  		@article_comment.destroy
  		redirect_to article_path(@article)
  end
  def article_comment_params
		params.require(:article_comment).permit(:body, :article_comment_id)
	end
end
