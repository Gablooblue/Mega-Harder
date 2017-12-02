class Prescription < ApplicationRecord
    belongs_to :user
    belongs_to :doctor, class_name: "User"
    has_many :prescription_medicines
end
