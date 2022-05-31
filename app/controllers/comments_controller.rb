class CommentsController < ApplicationController
	def index
		@comments = Comment.all
		@users = User.all
	end
	def create
		@post = Post.find(params[:post_id])
    @comment = @post.comments.create(params[:comment].permit(:body).merge(user_id: current_user.id))
	end
	def destroy
		@post = Post.find(params[:post_id])
		@comment = @post.comments.find(params[:id])
		@comment.destroy
		redirect_to post_path(@post)
	end
	def comment_params
		params.require(:comment).permit(:body, :comment_id)
	end
end
