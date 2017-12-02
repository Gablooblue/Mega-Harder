class ChangePrescriptionMedicinesTable < ActiveRecord::Migration[5.1]
  def change
    add_column :prescription_medicines, :total_price, :decimal
  end
end
