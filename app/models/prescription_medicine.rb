class PrescriptionMedicine < ApplicationRecord
    belongs_to :prescription
    has_one :medicine_type
end
