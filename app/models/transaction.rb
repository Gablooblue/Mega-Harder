class Transaction < ApplicationRecord
  has_one :transaction_status
  has_many :prescription_medicines
  before_create :set_transaction_status
  before_save :update_total

  def subtotal
    prescription_medicines.collect { |oi| oi.valid? ? (oi.quantity * oi.unit_price) : 0 }.sum
  end

  private
  def set_transaction_status
    self.order_status_id = 1
  end

  def update_total
    self[:total] = total
  end

end
