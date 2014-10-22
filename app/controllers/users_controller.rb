class UsersController < ApplicationController
  protect_from_forgery with: :exception

  def index
    @users = User.all
  end

  def new
    @user = User.new
  end
  
   def create
    @contact = User.new(firstname: params[:firstname], lastname: params[:lastname], email: params[:email])
    if @contact.save
      render json: @contact, status: :created, location: @contact
    else
      render json: @contact.errors, status: :unprocessable_entity
    end
  end

  private
    def user_params
      params.require(:user).permit(:firstname, :lastname, :email)
    end
  
end
