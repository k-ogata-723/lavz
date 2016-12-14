class LandingsController < ApplicationController
  def index
    @microposts = Micropost.all
    render 'static_pages/landing'
  end
end
