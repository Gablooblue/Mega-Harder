class CreateTransactions < ActiveRecord::Migration[5.1]
  def change
    create_table :transactions do |t|
      t.decimal :total, precision: 12, scale: 3
      t.references :order_status, foreign_key: true

      t.timestamps
    end
  end
end
