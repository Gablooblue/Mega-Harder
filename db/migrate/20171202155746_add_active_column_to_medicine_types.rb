class AddActiveColumnToMedicineTypes < ActiveRecord::Migration[5.1]
  def change
    add_column :medicine_types, :active, :boolean
  end
end
