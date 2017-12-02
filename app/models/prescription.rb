class Prescription < ApplicationRecord
    belongs_to :user
    belongs_to :doctor, class_name: "User"
end
