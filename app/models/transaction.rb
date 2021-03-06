class Transaction < ApplicationRecord
  has_one :transaction_status
  has_many :transaction_items
  has_many :prescription_medicines
  belongs_to :user
  belongs_to :deliverer, class_name: "User"
  before_create :set_transaction_status
  before_save :update_total
  after_create :create_status

  def total
    prescription_medicines.collect { |oi| oi.valid? ? (oi.quantity * oi.unit_price) : 0 }.sum
  end

  private
  def set_transaction_status
    self.order_status_id = 1
  end

  def update_total
    self[:total] = total
  end

  def create_status
      TransactionStatus.create(transaction_id: self.id, name: "Pending")
  end 

end
