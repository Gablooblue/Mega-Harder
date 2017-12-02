class UsersController < ApplicationController
    def prescriptions
	@prescriptions = Prescription.where(user_id: params[:user_id])
    end

    def transactions
	@transactions = Transactions.where(user_id: params[:user_id])
    end
end
