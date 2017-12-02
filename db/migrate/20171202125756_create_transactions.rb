class CreateTransactions < ActiveRecord::Migration[5.1]
  def change
    create_table :transactions do |t|
      t.decimal :total, precision: 12, scale: 3
      t.integer :user_id
      t.integer :deliverer_id

      t.timestamps
    end
  end
end
