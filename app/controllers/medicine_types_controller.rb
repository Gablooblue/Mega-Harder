class MedicineTypesController < ApplicationController
  before_action :set_medicine_type, only: [:show, :edit, :update, :destroy]

  # GET /medicine_types
  # GET /medicine_types.json
  def index
    @medicine_types = MedicineType.all
  end

  # GET /medicine_types/1
  # GET /medicine_types/1.json
  def show
  end

  # GET /medicine_types/new
  def new
    @medicine_type = MedicineType.new
  end

  # GET /medicine_types/1/edit
  def edit
  end

  # POST /medicine_types
  # POST /medicine_types.json
  def create
    @medicine_type = MedicineType.new(medicine_type_params)

    respond_to do |format|
      if @medicine_type.save
        format.html { redirect_to @medicine_type, notice: 'Medicine type was successfully created.' }
        format.json { render :show, status: :created, location: @medicine_type }
      else
        format.html { render :new }
        format.json { render json: @medicine_type.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /medicine_types/1
  # PATCH/PUT /medicine_types/1.json
  def update
    respond_to do |format|
      if @medicine_type.update(medicine_type_params)
        format.html { redirect_to @medicine_type, notice: 'Medicine type was successfully updated.' }
        format.json { render :show, status: :ok, location: @medicine_type }
      else
        format.html { render :edit }
        format.json { render json: @medicine_type.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /medicine_types/1
  # DELETE /medicine_types/1.json
  def destroy
    @medicine_type.destroy
    respond_to do |format|
      format.html { redirect_to medicine_types_url, notice: 'Medicine type was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_medicine_type
      @medicine_type = MedicineType.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def medicine_type_params
      params.require(:medicine_type).permit(:generic_name, :description, :average_price)
    end
end
