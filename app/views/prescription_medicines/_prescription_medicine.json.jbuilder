json.extract! prescription_medicine, :id, :medicine_type_id, :prescription_id, :limit, :purchased, :created_at, :updated_at
json.url prescription_medicine_url(prescription_medicine, format: :json)
