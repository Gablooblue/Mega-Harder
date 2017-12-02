class MedicineType < ApplicationRecord
    has_many :prescription_medicines

    default_scope { where(active: true) }
end
