require 'test_helper'

class MedicineTypesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @medicine_type = medicine_types(:one)
  end

  test "should get index" do
    get medicine_types_url
    assert_response :success
  end

  test "should get new" do
    get new_medicine_type_url
    assert_response :success
  end

  test "should create medicine_type" do
    assert_difference('MedicineType.count') do
      post medicine_types_url, params: { medicine_type: { average_price: @medicine_type.average_price, description: @medicine_type.description, generic_name: @medicine_type.generic_name } }
    end

    assert_redirected_to medicine_type_url(MedicineType.last)
  end

  test "should show medicine_type" do
    get medicine_type_url(@medicine_type)
    assert_response :success
  end

  test "should get edit" do
    get edit_medicine_type_url(@medicine_type)
    assert_response :success
  end

  test "should update medicine_type" do
    patch medicine_type_url(@medicine_type), params: { medicine_type: { average_price: @medicine_type.average_price, description: @medicine_type.description, generic_name: @medicine_type.generic_name } }
    assert_redirected_to medicine_type_url(@medicine_type)
  end

  test "should destroy medicine_type" do
    assert_difference('MedicineType.count', -1) do
      delete medicine_type_url(@medicine_type)
    end

    assert_redirected_to medicine_types_url
  end
end
