class AnswersController < ApplicationController
  def index
    @comments = Comment.all
    @posts = Post.all
  end
end
