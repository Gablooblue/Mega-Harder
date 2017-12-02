json.extract! prescription, :id, :doctor_id, :user_id, :created_at, :updated_at
json.url prescription_url(prescription, format: :json)
