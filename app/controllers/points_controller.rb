class PointsController < ApplicationController
  def index
    @stories = Story.all
		@points = Point.all
    @users = User.all
    @user = User.find(params[:user_id])
    @point = User.find(params[:user_id])
	end
  def create
		@story = Story.find(params[:story_id])
		@point = @story.points.create(params[:point].permit(:body).merge(user_id: current_user.id))
		redirect_to story_path(@story)
	end
  def destroy
		@story = Story.find(params[:story_id])
		@point = @story.points.find(params[:id])
		@point.destroy
		redirect_to story_path(@story)
	end
end
