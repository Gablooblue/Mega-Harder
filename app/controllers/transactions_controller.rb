class TransactionsController < ApplicationController
    before_action :authenticate_user!
    before_action :set_user
    before_action :set_transaction, only: [:update, :destroy]

    def index
	@transactions = @user.transactions
    end

    def show
	@transaction = Transaction.find_by(user_id: params[:user_id], id: params[:id])
    end

    def create
	@transaction = Transaction.new(transaction_params)

	respond_to do |format|
	    if @transaction.save
		format.html { redirect_to @transaction, notice: 'Transaction was successfully created.' }
		format.json { render :show, status: :created, location: @transaction}
	    else
		format.html { render :new }
		format.json { render json: @transaction.errors, status: :unprocessable_entity }
	    end
	end

    end
    def update
	respond_to do |format|
	    if @transaction.update(transaction_params)
		format.html { redirect_to @transaction, notice: 'Prescription was successfully updated.' }
		format.json { render :show, status: :ok, location: @transaction }
	    else
		format.html { render :edit }
		format.json { render json: @transaction.errors, status: :unprocessable_entity }
	    end
	end
    end
    def destroy
	@transaction.destroy
	respond_to do |format|
	    format.html { redirect_to transaction_url, notice: 'Prescription was successfully destroyed.' }
	    format.json { head :no_content }
	end
    end

    private

    def set_user
	@user = User.find(params[:user_id])
    end

    def set_transaction
	@transaction = Transaction.find_by(user_id: params[:user_id], id: params[:id])
    end

    def transaction_params
	params.require(:transaction).permit(:total, :user_id)
    end
end
