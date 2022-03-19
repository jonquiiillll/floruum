class PromoController < ApplicationController
  def index
      @categories = Category.all
  end
end
