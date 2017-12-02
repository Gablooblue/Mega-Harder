class TransactionItem < ApplicationRecord
    belongs_to :transaction
    has_one :medicine_type
end
