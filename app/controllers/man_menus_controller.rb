class ManMenusController < ApplicationController
  # GET /man_menus
  # GET /man_menus.json
  def index
    @man_menus = ManMenu.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @man_menus }
    end
  end

  # GET /man_menus/1
  # GET /man_menus/1.json
  def show
    @man_menu = ManMenu.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @man_menu }
    end
  end

  # GET /man_menus/new
  # GET /man_menus/new.json
  def new
    @man_menu = ManMenu.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @man_menu }
    end
  end

  # GET /man_menus/1/edit
  def edit
    @man_menu = ManMenu.find(params[:id])
  end

  # POST /man_menus
  # POST /man_menus.json
  def create
    @man_menu = ManMenu.new(params[:man_menu])

    respond_to do |format|
      if @man_menu.save
        format.html { redirect_to @man_menu, notice: 'Man menu was successfully created.' }
        format.json { render json: @man_menu, status: :created, location: @man_menu }
      else
        format.html { render action: "new" }
        format.json { render json: @man_menu.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /man_menus/1
  # PUT /man_menus/1.json
  def update
    @man_menu = ManMenu.find(params[:id])

    respond_to do |format|
      if @man_menu.update_attributes(params[:man_menu])
        format.html { redirect_to @man_menu, notice: 'Man menu was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @man_menu.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /man_menus/1
  # DELETE /man_menus/1.json
  def destroy
    @man_menu = ManMenu.find(params[:id])
    @man_menu.destroy

    respond_to do |format|
      format.html { redirect_to man_menus_url }
      format.json { head :no_content }
    end
  end
end
