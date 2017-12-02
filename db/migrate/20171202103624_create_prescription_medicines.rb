class CreatePrescriptionMedicines < ActiveRecord::Migration[5.1]
  def change
    create_table :prescription_medicines do |t|
      t.integer :medicine_type_id
      t.integer :prescription_id
      t.integer :limit
      t.integer :purchased

      t.timestamps
    end
  end
end
