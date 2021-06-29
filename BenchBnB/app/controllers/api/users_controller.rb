class UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user && @user.save
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def user_params
        params.require(:user).permit(:username, :password)
    end
end