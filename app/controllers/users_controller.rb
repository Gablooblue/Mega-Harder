class UsersController < ApplicationController
    def index
	@users = User.all
    end

    def show
	@user = User.find(params[:id])
    end

    def transactions
	@transactions = Transactions.where(user_id: params[:user_id])
    end
end
