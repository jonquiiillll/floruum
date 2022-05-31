class SortsController < ApplicationController
  before_action :set_sort, only: %i[ show edit update destroy ]

  # GET /sorts or /sorts.json
  def index
    @sorts = Sort.all
  end

  # GET /sorts/1 or /sorts/1.json
  def show
  end

  # GET /sorts/new
  def new
    @sort = Sort.new
  end

  # GET /sorts/1/edit
  def edit
  end

  # POST /sorts or /sorts.json
  def create
    @sort = Sort.new(sort_params)

    respond_to do |format|
      if @sort.save
        format.html { redirect_to @sort, notice: "Sort was successfully created." }
        format.json { render :show, status: :created, location: @sort }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @sort.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /sorts/1 or /sorts/1.json
  def update
    respond_to do |format|
      if @sort.update(sort_params)
        format.html { redirect_to @sort, notice: "Sort was successfully updated." }
        format.json { render :show, status: :ok, location: @sort }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @sort.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /sorts/1 or /sorts/1.json
  def destroy
    @sort.destroy
    respond_to do |format|
      format.html { redirect_to sorts_url, notice: "Sort was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sort
      @sort = Sort.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def sort_params
      params.require(:sort).permit(:name, :description, :display_in_navbar)
    end
end
