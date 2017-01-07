class MicropostsController < ApplicationController
  before_action :logged_in_user, only: [:create, :destroy]
  before_action :set_micropost, only: :destroy

  def create
    @micropost = current_user.microposts.build(micropost_params)
    if @micropost.save
      flash[:success] = "Micropost created!"
      redirect_to home_path
    else
      @feed_items []
      render 'static_pages/home'
    end
  end

  def destroy
    @micropost.destroy
    flash[:success] = "Micropost deleted"
    redirect_to request.referrer || home_path
  end

  private

    def micropost_params
      params.require(:micropost).permit(:content, :picture)
    end

    def set_micropost
      @micropost = current_user.microposts.find_by(id: params[:id])
      redirect_to home_path if @micropost.nil?
    end
end
