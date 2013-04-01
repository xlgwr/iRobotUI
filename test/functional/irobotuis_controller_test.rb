require 'test_helper'

class IrobotuisControllerTest < ActionController::TestCase
  setup do
    @irobotui = irobotuis(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:irobotuis)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create irobotui" do
    assert_difference('Irobotui.count') do
      post :create, irobotui: { menuid: @irobotui.menuid, themesid: @irobotui.themesid, userid: @irobotui.userid }
    end

    assert_redirected_to irobotui_path(assigns(:irobotui))
  end

  test "should show irobotui" do
    get :show, id: @irobotui
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @irobotui
    assert_response :success
  end

  test "should update irobotui" do
    put :update, id: @irobotui, irobotui: { menuid: @irobotui.menuid, themesid: @irobotui.themesid, userid: @irobotui.userid }
    assert_redirected_to irobotui_path(assigns(:irobotui))
  end

  test "should destroy irobotui" do
    assert_difference('Irobotui.count', -1) do
      delete :destroy, id: @irobotui
    end

    assert_redirected_to irobotuis_path
  end
end
