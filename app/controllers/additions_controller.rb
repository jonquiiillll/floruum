class AdditionsController < ApplicationController
  def create
		@story = Story.find(params[:story_id])
    @addition = @story.additions.create(params[:addition].permit(:body).merge(user_id: current_user.id))
		redirect_to story_path(@story)
	end
  def destroy
		@story = Story.find(params[:story_id])
    @addition = @story.additions.create(params[:addition].permit(:body).merge(user_id: current_user.id))
		@addition.destroy
		redirect_to story_path(@story)
	end
  def addition_params
    params.require(:addition).permit(:body, :user_id, :id)
  end
end
