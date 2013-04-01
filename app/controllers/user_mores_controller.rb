class UserMoresController < ApplicationController
  # GET /user_mores
  # GET /user_mores.json
  def index
    @user_mores = UserMore.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @user_mores }
    end
  end

  # GET /user_mores/1
  # GET /user_mores/1.json
  def show
    @user_more = UserMore.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @user_more }
    end
  end

  # GET /user_mores/new
  # GET /user_mores/new.json
  def new
    @user_more = UserMore.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @user_more }
    end
  end

  # GET /user_mores/1/edit
  def edit
    @user_more = UserMore.find(params[:id])
  end

  # POST /user_mores
  # POST /user_mores.json
  def create
    @user_more = UserMore.new(params[:user_more])

    respond_to do |format|
      if @user_more.save
        format.html { redirect_to @user_more, notice: 'User more was successfully created.' }
        format.json { render json: @user_more, status: :created, location: @user_more }
      else
        format.html { render action: "new" }
        format.json { render json: @user_more.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /user_mores/1
  # PUT /user_mores/1.json
  def update
    @user_more = UserMore.find(params[:id])

    respond_to do |format|
      if @user_more.update_attributes(params[:user_more])
        format.html { redirect_to @user_more, notice: 'User more was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @user_more.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /user_mores/1
  # DELETE /user_mores/1.json
  def destroy
    @user_more = UserMore.find(params[:id])
    @user_more.destroy

    respond_to do |format|
      format.html { redirect_to user_mores_url }
      format.json { head :no_content }
    end
  end
end
