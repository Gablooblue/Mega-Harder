class CreateTransactions < ActiveRecord::Migration[5.1]
  def change
    create_table :transactions do |t|
      t.decimal :total, precision: 12, scale: 3
      t.integer :order_status

      t.timestamps
    end
  end
end
