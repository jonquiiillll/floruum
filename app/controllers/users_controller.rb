class UsersController < ApplicationController
  def index
    @posts = Post.all
    @categories = Category.all
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
    @posts = Post.all
    @categories = Category.all
    if params.has_key?(:category)
      @category = Category.find_by_name(params[:category])
      @posts = Post.where(category: @category, user: @user)
    else
      @posts = Post.all.includes(:category, :user, :likes, :favorites).map do
    |post|
    post.as_json(include: [:category, :user, :comments, :image])
  end
    end

    @stories = Story.all
    if @user
      @stories = @user.mine_ids
      render actions: :show
      @mines = @user.mines.all
    else
        render file: 'public/404', status: 404, formats: [:html]
    end
  end

  def mined?(story)
    mines.find_by(story_id: story.id).present?
  end

  def myposts
    @user = User.find(params[:id])
    if @user
      @posts = @post.user_id
      render actions: :show
      @posts = @user.posts.all
    end
  end
  def already_my_post?
    Post.where(user_id: current_user.id, post_id:
    params[:post_id]).exists?
  end
  def find_post
    @post = Post.find(params[:post_id])
  end

def favorited?(post)
    favorites.find_by(post_id: post.id).present?
  end

  def follow
    @user = User.find(params[:id])
    current_user.followees << @user
    redirect_back(fallback_location: user_path(@user))
  end

  def unfollow
    @user = User.find(params[:id])
    current_user.followed_users.find_by(followee_id: @user.id).destroy
    redirect_back(fallback_location: user_path(@user))
  end

  def following
    @user = User.find(params[:id])
    if @user
      @follow = @user.followed_users
      render actions: :show
      @following = @user.followees.all
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to users_path, notice: 'User deleted.'
  end
  def user_params
    params.require(:user).permit(:username, :user_id, :avatar)
  end
end
