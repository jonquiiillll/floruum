class NotesController < ApplicationController
	def create
		@art = Art.find(params[:art_id])
		@note = @art.notes.create(params[:note].permit(:commenter, :body))
		redirect_to art_path(@art)
	end
end
