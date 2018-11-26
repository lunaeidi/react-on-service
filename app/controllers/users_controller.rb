class UsersController < ApplicationController
  
  def new
  end
  def create
    if user=User.find_by_username(params[:username])
      flash[:error] = "Username already exists" #does this work alone?
      return redirect_to controller:'users', action:'new'
    elsif email= User.find_by_email(params[:email])
      flash[:error]= "There's already an account with this email address"
      render :new
    elsif params[:username].blank? #have validation in model... and put the message there and do if user.save
      flash[:error]= "You must include a username"
      return  redirect_to controller:'users', action:'new'
    else #where do I want them to be directed once logged in?
      @user=  User.create(username: params[:username],email: params[:email], password: params[:password])
      session[:user_id] = @user.id
      redirect_to poses_path
    end
end
  def show
  end
  def index
  end
  def edit
  end
  def update
  end
  def destroy
  end
end


