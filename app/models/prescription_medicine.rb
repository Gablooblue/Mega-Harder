class PrescriptionMedicine < ApplicationRecord
    belongs_to :prescription
    belongs_to :transaction
    belongs_to :medicine_type

    validates :quantity, presence: true, numericality: { only_integer: true, greater_than: 0 }
    validate :medicine_type_present
    validate :transaction_present
    validate :prescription_present

    before_save :finalize

    def unit_price
      if persisted?
        self[:unit_price]
      else
        medicine_type.price
      end
    end

    def total_price
      unit_price * quantity
    end

  private
    def medicine_type_present
      if medicine_type.nil?
        errors.add(:medicine_type, "is not valid medicine.")
      end
    end

    def transaction_present
      if transaction.nil?
        errors.add(:transaction, "is not a valid transaction.")
      end
    end

    def prescription_present
      if prescription.nil?
        errors.add(:prescription, "does not have a valid prescription.")
      end
    end

    def finalize
      self[:unit_price] = unit_price
      self[:total_price] = quantity * self[:unit_price]
    end

end