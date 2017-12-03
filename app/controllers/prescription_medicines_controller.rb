class PrescriptionMedicinesController < ApplicationController
  before_action :set_prescription_medicine, only: [:show, :edit, :update, :destroy]

  # GET /prescription_medicines
  # GET /prescription_medicines.json
  def index
      @prescription_medicines = PrescriptionMedicine.where(prescription_id: params[:prescription_id])
  end

  # GET /prescription_medicines/1
  # GET /prescription_medicines/1.json
  def show
  end

  # GET /prescription_medicines/new
  def new
    @prescription_medicine = PrescriptionMedicine.new
  end

  # GET /prescription_medicines/1/edit
  def edit
  end

  # POST /prescription_medicines
  # POST /prescription_medicines.json
  def create
    @prescription_medicine = PrescriptionMedicine.new(prescription_medicine_params)

    respond_to do |format|
      if @prescription_medicine.save
        format.html { redirect_to @prescription_medicine, notice: 'Prescription medicine was successfully created.' }
        format.json { render :show, status: :created, location: @prescription_medicine }
      else
        format.html { render :new }
        format.json { render json: @prescription_medicine.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /prescription_medicines/1
  # PATCH/PUT /prescription_medicines/1.json
  def update
    respond_to do |format|
      if @prescription_medicine.update(prescription_medicine_params)
        format.html { redirect_to @prescription_medicine, notice: 'Prescription medicine was successfully updated.' }
        format.json { render :show, status: :ok, location: @prescription_medicine }
      else
        format.html { render :edit }
        format.json { render json: @prescription_medicine.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /prescription_medicines/1
  # DELETE /prescription_medicines/1.json
  def destroy
    @prescription_medicine.destroy
    respond_to do |format|
      format.html { redirect_to prescription_medicines_url, notice: 'Prescription medicine was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_prescription_medicine
      @prescription_medicine = PrescriptionMedicine.find_by(id: params[:id], prescription_id: params[:prescription_id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def prescription_medicine_params
      params.require(:prescription_medicine).permit(:medicine_type_id, :prescription_id, :limit, :purchased)
    end
end
