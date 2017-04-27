class StaticPagesController < ApplicationController

  def index
    # render :layout => 'landing'
    @microposts = Micropost.paginate(page: params[:page])
    #ログイン済みであれば、そのユーザーのマイクロポスト一覧を表示する
    if logged_in?
        @micropost = current_user.microposts.build
        @feed_items = current_user.feed.paginate(page: params[:page])
    end
  end

  def home
    if logged_in?
        @micropost = current_user.microposts.build
        @feed_items = current_user.feed.paginate(page: params[:page])
        # @feed_items_protocols = feed_protocol(micropost_id)
    end
  end

  def help
  end

  def about
  end

  def contact
  end
end
