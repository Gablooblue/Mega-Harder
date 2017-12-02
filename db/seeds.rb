# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

MedicineType.delete_all
MedicineType.create! id: 1, generic_name: "Paracetamol", description: "Anti headache", average_price: 16, active: true
MedicineType.create! id: 2, generic_name: "Amoxicillin", description: "Anti biotic", average_price: 24, active: true
MedicineType.create! id: 3, generic_name: "Penicillin", description: "Better Antibiotic", average_price: 32, active: true

TransactionStatus.delete_all
TransactionStatus.create! id: 1, name: "In Progress"
TransactionStatus.create! id: 2, name: "New"
TransactionStatus.create! id: 3, name: "Success"
TransactionStatus.create! id: 4, name: "Failed"