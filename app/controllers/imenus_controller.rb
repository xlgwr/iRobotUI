class ImenusController < ApplicationController
  before_filter :authenticate_user!
  # GET /imenus
  # GET /imenus.json
  def index
    @imenus_grid=initialize_grid(Imenu)
    @imenus = Imenu.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @imenus }
    end
  end

  # GET /imenus/1
  # GET /imenus/1.json
  def show
    @imenu = Imenu.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @imenu }
    end
  end

  # GET /imenus/new
  # GET /imenus/new.json
  def new
    @imenu = Imenu.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @imenu }
    end
  end

  # GET /imenus/1/edit
  def edit
    @imenu = Imenu.find(params[:id])
  end

  # POST /imenus
  # POST /imenus.json
  def create
    @imenu = Imenu.new(params[:imenu])
    @imenu.create_man=current_user.email;
    respond_to do |format|
      if @imenu.save
        format.html { redirect_to @imenu, notice: 'Imenu was successfully created.' }
        format.json { render json: @imenu, status: :created, location: @imenu }
      else
        format.html { render action: "new" }
        format.json { render json: @imenu.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /imenus/1
  # PUT /imenus/1.json
  def update
    @imenu = Imenu.find(params[:id])
    @imenu.edit_man=current_user.email;
    respond_to do |format|
      if @imenu.update_attributes(params[:imenu])
        format.html { redirect_to @imenu, notice: 'Imenu was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @imenu.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /imenus/1
  # DELETE /imenus/1.json
  def destroy
    @imenu = Imenu.find(params[:id])
    @imenu.destroy

    respond_to do |format|
      format.html { redirect_to imenus_url }
      format.json { head :no_content }
    end
  end
end
