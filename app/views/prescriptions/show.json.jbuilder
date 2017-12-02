json.partial! "prescriptions/prescription", prescription: @prescription

json.items @prescription.prescription_medicines do |item|
    json.id item.id
    json.name item.medicine_type.generic_name
    json.price item.medicine_type.average_price
end
