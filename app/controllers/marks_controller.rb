class MarksController < ApplicationController
  def create
  @art = Art.find(params[:art_id])
  @mark = @art.marks.create(params[:mark].permit(:commenter, :body))
  redirect_to art_path(@art)
  end
  def destroy
    @art = Art.find(params[:art_id])
    @mark = @art.marks.find(params[:id])
    @mark.destroy
    redirect_to art_path(@art)
  end
end
