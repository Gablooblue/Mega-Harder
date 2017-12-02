require 'test_helper'

class PrescriptionMedicinesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @prescription_medicine = prescription_medicines(:one)
  end

  test "should get index" do
    get prescription_medicines_url
    assert_response :success
  end

  test "should get new" do
    get new_prescription_medicine_url
    assert_response :success
  end

  test "should create prescription_medicine" do
    assert_difference('PrescriptionMedicine.count') do
      post prescription_medicines_url, params: { prescription_medicine: { limit: @prescription_medicine.limit, medicine_type_id: @prescription_medicine.medicine_type_id, prescription_id: @prescription_medicine.prescription_id, purchased: @prescription_medicine.purchased } }
    end

    assert_redirected_to prescription_medicine_url(PrescriptionMedicine.last)
  end

  test "should show prescription_medicine" do
    get prescription_medicine_url(@prescription_medicine)
    assert_response :success
  end

  test "should get edit" do
    get edit_prescription_medicine_url(@prescription_medicine)
    assert_response :success
  end

  test "should update prescription_medicine" do
    patch prescription_medicine_url(@prescription_medicine), params: { prescription_medicine: { limit: @prescription_medicine.limit, medicine_type_id: @prescription_medicine.medicine_type_id, prescription_id: @prescription_medicine.prescription_id, purchased: @prescription_medicine.purchased } }
    assert_redirected_to prescription_medicine_url(@prescription_medicine)
  end

  test "should destroy prescription_medicine" do
    assert_difference('PrescriptionMedicine.count', -1) do
      delete prescription_medicine_url(@prescription_medicine)
    end

    assert_redirected_to prescription_medicines_url
  end
end
