class SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login!(@user)
            redirect_to :user_url
        else
            render json: {errors: ["invalid username or password"]}
        end
    end

    def destroy
        if current_user
            logout!
            render json: {}
        else
            render :status => 404
        end
    end


end