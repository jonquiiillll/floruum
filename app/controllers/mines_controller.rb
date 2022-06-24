class MinesController < ApplicationController
  before_action :find_story
  before_action :find_mine, only: [:destroy]

  def create
    if already_mined?
      flash[:notice] = "You can't add to favorite more than once"
    else
      @story.mines.create(user_id: current_user.id)
    end
    redirect_to story_path(@story)
  end
  def destroy
    if !(already_mined?)
      flash[:notice] = "Cannot unfavorite"
    else
      @mine.destroy
    end
    redirect_to story_path(@story)
  end
  private
  def already_mined?
    Mine.where(user_id: current_user.id, story_id:
    params[:story_id]).exists?
  end
  def find_story
    @story = Story.find(params[:story_id])
  end
  def find_mine
     @mine = @story.mines.find(params[:id])
  end
end
