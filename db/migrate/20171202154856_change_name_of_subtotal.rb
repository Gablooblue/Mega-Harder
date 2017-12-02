class ChangeNameOfSubtotal < ActiveRecord::Migration[5.1]
  def change
    rename_column :prescription_medicines, :subtotal, :unit_price
  end
end
