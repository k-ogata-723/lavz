class MicropostsController < ApplicationController
  before_action :logged_in_user, only: [:create, :destroy, :show, :update ]
  before_action :set_micropost, only: [:destroy, :show]

  def create
    @micropost = current_user.microposts.build(micropost_params)
    if @micropost.save
      flash[:success] = "Micropost created!"
      render json: @micropost
    else
      @feed_items = []
      render json: @micropost
    end
  end

  def show
    messages = Micropost.find(params[:id])
    render json: messages
  end

  def update
    @micropost = Micropost.find(params[:id])
    @micropost.update(micropost_params)

    render json: @micropost
  end

  def destroy
    @micropost.destroy
    flash[:success] = "Micropost deleted"
    redirect_to request.referrer || home_path
  end


  private

    def micropost_params
      params.require(:micropost).permit(:content, :picture, :id, :user_id)
    end

    def set_micropost
      @micropost = current_user.microposts.find_by(id: params[:id])
      redirect_to home_path if @micropost.nil?
    end
end
