class FeedbackController < ApplicationController
  def create
		@story = Story.find(params[:story_id])
		@feedback = @story.feedbacks.create(params[:feedback].permit(:commenter, :body))
		redirect_to story_path(@story)
	end
end
