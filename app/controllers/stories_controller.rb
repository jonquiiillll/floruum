class StoriesController < ApplicationController
  before_action :set_story, only: %i[ show edit update destroy ]

  # GET /stories or /stories.json
  def index
    @stories = Story.all
    @sorts = Sort.all
    @stories = Story.where(point: @point)
    if params.has_key?(:sort)
      @sort = Sort.find_by_name(params[:sort])
      @stories = Story.where(point: @point)
      @stories = Story.where(sort: @sort)
    else
      @stories = Story.all
      @stories = Story.all.includes(:sort).map do
    |story|
    story.as_json(include: [:sort])
    end
    end
  end

  # GET /stories/1 or /stories/1.json
  def show
   @points = Point.all
   @points = User.all
   @users = User.all
   @point = Point.find_by_id(params[:id])
  end

  # GET /stories/new
  def new
    @story = Story.new
  end

  # GET /stories/1/edit
  def edit
  end

  # POST /stories or /stories.json
  def create
    @story = Story.new(story_params.merge(user_id: current_user.id))

    respond_to do |format|
      if @story.save
        format.html { redirect_to @story, notice: "Story was successfully created." }
        format.json { render :show, status: :created, location: @story }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @story.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /stories/1 or /stories/1.json
  def update
    respond_to do |format|
      if @story.update(story_params)
        format.html { redirect_to @story, notice: "Story was successfully updated." }
        format.json { render :show, status: :ok, location: @story }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @story.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /stories/1 or /stories/1.json
  def destroy
    @story.destroy
    respond_to do |format|
      format.html { redirect_to stories_url, notice: "Story was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_story
      @story = Story.find(params[:id])
    end
    def filtering_params(params)
      params.slice(:starts_with)
    end

    # Only allow a list of trusted parameters through.
    def story_params
      params.require(:story).permit(:name, :sort_id, :user_id, :remark, :addition, :title, :picture, :content)
    end
end
