class CreateTransactionItems < ActiveRecord::Migration[5.1]
  def change
    create_table :transaction_items do |t|
      t.integer :medicine_type_id
      t.integer :amount
      t.integer :transaction_id

      t.timestamps
    end
  end
end
