class CreateMedicineTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :medicine_types do |t|
      t.string :generic_name
      t.string :description
      t.decimal :average_price

      t.timestamps
    end
  end
end
