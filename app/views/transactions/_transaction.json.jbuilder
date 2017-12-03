json.extract! transaction, :id, :total, :user_id, :deliverer_id
json.url transaction_url(transaction, format: :json)
