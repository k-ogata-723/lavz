class StaticPagesController < ApplicationController
  def landing
    render :layout => 'landing'
  end

  def home
    @micropost = current_user.microposts.build if logged_in?
  end

  def help
  end

  def about
  end

  def contact
  end
end
