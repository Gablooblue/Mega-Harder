class TransactionStatusesController < ApplicationController
    before_action :set_status

    def index 
    end
    
    def update
	respond_to do |format|
	    if @transaction_status.update(transaction_status_params)
		format.html { redirect_to @transaction, notice: "Status changed" }	
		format.json { render :show, status: :ok, location: @transaction }
	    else
		format.html { render :back }
		format.json { render json: @transaction_status.errors, status: :unprocessable_entity }

	    end
	end
    end

    private

    def transaction_status_params
	params.require(:transaction_status).permit(:name, :transaction_id)
    end

    def set_status
	@transaction= Transaction.find_by(user_id: parans[:user_id], id: params[:id])
	@transaction_status = @transaction.transaction_status
    end
end
