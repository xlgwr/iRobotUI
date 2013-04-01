require 'test_helper'

class MenubomsControllerTest < ActionController::TestCase
  setup do
    @menubom = menuboms(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:menuboms)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create menubom" do
    assert_difference('Menubom.count') do
      post :create, menubom: { active: @menubom.active, content: @menubom.content, create_man: @menubom.create_man, end_date: @menubom.end_date, menu_children: @menubom.menu_children, menu_parent: @menubom.menu_parent, plugins: @menubom.plugins, select_count: @menubom.select_count, start_date: @menubom.start_date, update_man: @menubom.update_man }
    end

    assert_redirected_to menubom_path(assigns(:menubom))
  end

  test "should show menubom" do
    get :show, id: @menubom
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @menubom
    assert_response :success
  end

  test "should update menubom" do
    put :update, id: @menubom, menubom: { active: @menubom.active, content: @menubom.content, create_man: @menubom.create_man, end_date: @menubom.end_date, menu_children: @menubom.menu_children, menu_parent: @menubom.menu_parent, plugins: @menubom.plugins, select_count: @menubom.select_count, start_date: @menubom.start_date, update_man: @menubom.update_man }
    assert_redirected_to menubom_path(assigns(:menubom))
  end

  test "should destroy menubom" do
    assert_difference('Menubom.count', -1) do
      delete :destroy, id: @menubom
    end

    assert_redirected_to menuboms_path
  end
end
