require 'test_helper'

class ImenusControllerTest < ActionController::TestCase
  setup do
    @imenu = imenus(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:imenus)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create imenu" do
    assert_difference('Imenu.count') do
      post :create, imenu: { a_attr: @imenu.a_attr, children: @imenu.children, content: @imenu.content, create_man: @imenu.create_man, data: @imenu.data, edit_man: @imenu.edit_man, li_attr: @imenu.li_attr, title: @imenu.title, version: @imenu.version }
    end

    assert_redirected_to imenu_path(assigns(:imenu))
  end

  test "should show imenu" do
    get :show, id: @imenu
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @imenu
    assert_response :success
  end

  test "should update imenu" do
    put :update, id: @imenu, imenu: { a_attr: @imenu.a_attr, children: @imenu.children, content: @imenu.content, create_man: @imenu.create_man, data: @imenu.data, edit_man: @imenu.edit_man, li_attr: @imenu.li_attr, title: @imenu.title, version: @imenu.version }
    assert_redirected_to imenu_path(assigns(:imenu))
  end

  test "should destroy imenu" do
    assert_difference('Imenu.count', -1) do
      delete :destroy, id: @imenu
    end

    assert_redirected_to imenus_path
  end
end
