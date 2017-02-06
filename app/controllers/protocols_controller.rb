class ProtocolsController < ApplicationController
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
