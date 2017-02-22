class ProtocolsController < ApplicationController
  before_action :logged_in_user, only: [:create, :destroy, :show, :update]
  before_action :set_protocol, only: [:destroy, :show]

  def index
  end

  def create
    @protocol = microposts.build(protocol_params)
    if @protocole.save
      flash[:success] = "Protocol created!"
      render json: @protocol
    else
    end
  end

  def show
    protocols = Protocol.find(:params[:id])
    render json: protocols
  end

  private

    def protocol_params
      params.require(:protocol).permit(:procedure, :micropost_id)
    end

    def set_protocol
    end
  end
