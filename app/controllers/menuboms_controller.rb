class MenubomsController < ApplicationController
  # GET /menuboms
  # GET /menuboms.json
  def index
    @menuboms = Menubom.all
    @menuboms_grid=initialize_grid(Menubom)
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @menuboms }
    end
  end

  # GET /menuboms/1
  # GET /menuboms/1.json
  def show
    @menubom = Menubom.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @menubom }
    end
  end

  # GET /menuboms/new
  # GET /menuboms/new.json
  def new
    @menubom = Menubom.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @menubom }
    end
  end

  # GET /menuboms/1/edit
  def edit
    @menubom = Menubom.find(params[:id])
  end

  # POST /menuboms
  # POST /menuboms.json
  def create
    @menubom = Menubom.new(params[:menubom])
    @menubom.create_man=current_user.email
    @menubom.select_count=1
    respond_to do |format|
      if @menubom.save
        format.html { redirect_to @menubom, notice: 'Menubom was successfully created.' }
        format.json { render json: @menubom, status: :created, location: @menubom }
      else
        format.html { render action: "new" }
        format.json { render json: @menubom.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /menuboms/1
  # PUT /menuboms/1.json
  def update
    @menubom = Menubom.find(params[:id])
    @menubom.update_man=current_user.email
    @menubom.select_count= @menubom.select_count+1
    respond_to do |format|
      if @menubom.update_attributes(params[:menubom])
        format.html { redirect_to @menubom, notice: 'Menubom was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @menubom.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /menuboms/1
  # DELETE /menuboms/1.json
  def destroy
    @menubom = Menubom.find(params[:id])
    @menubom.destroy

    respond_to do |format|
      format.html { redirect_to menuboms_url }
      format.json { head :no_content }
    end
  end
end
