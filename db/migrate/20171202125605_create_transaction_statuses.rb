class CreateTransactionStatuses < ActiveRecord::Migration[5.1]
  def change
    create_table :transaction_statuses do |t|
      t.string :name

      t.timestamps
    end
  end
end
