class CreateTransactions < ActiveRecord::Migration[5.1]
  def change
    create_table :transactions do |t|
      t.decimal :total, precision: 12, scale: 3
      t.integer :transaction_status_id

      t.timestamps
    end
  end
end
