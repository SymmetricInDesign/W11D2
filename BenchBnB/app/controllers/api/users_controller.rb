class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user && @user.save
            login!(@user)
            redirect_to :root
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        puts params
        params.require(:user).permit(:username, :password)
    end
end