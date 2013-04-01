require 'test_helper'

class ManMenusControllerTest < ActionController::TestCase
  setup do
    @man_menu = man_menus(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:man_menus)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create man_menu" do
    assert_difference('ManMenu.count') do
      post :create, man_menu: { active: @man_menu.active, content: @man_menu.content, create_man: @man_menu.create_man, end_date: @man_menu.end_date, menu: @man_menu.menu, plugins: @man_menu.plugins, select_count: @man_menu.select_count, start_date: @man_menu.start_date, update_man: @man_menu.update_man, user: @man_menu.user }
    end

    assert_redirected_to man_menu_path(assigns(:man_menu))
  end

  test "should show man_menu" do
    get :show, id: @man_menu
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @man_menu
    assert_response :success
  end

  test "should update man_menu" do
    put :update, id: @man_menu, man_menu: { active: @man_menu.active, content: @man_menu.content, create_man: @man_menu.create_man, end_date: @man_menu.end_date, menu: @man_menu.menu, plugins: @man_menu.plugins, select_count: @man_menu.select_count, start_date: @man_menu.start_date, update_man: @man_menu.update_man, user: @man_menu.user }
    assert_redirected_to man_menu_path(assigns(:man_menu))
  end

  test "should destroy man_menu" do
    assert_difference('ManMenu.count', -1) do
      delete :destroy, id: @man_menu
    end

    assert_redirected_to man_menus_path
  end
end
