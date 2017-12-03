json.extract! transaction_item, :id, :medicine_type_id, :amount, :created_at, :updated_at
json.url transaction_item_url(transaction_item, format: :json)
