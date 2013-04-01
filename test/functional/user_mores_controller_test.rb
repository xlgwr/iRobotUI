require 'test_helper'

class UserMoresControllerTest < ActionController::TestCase
  setup do
    @user_more = user_mores(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:user_mores)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create user_more" do
    assert_difference('UserMore.count') do
      post :create, user_more: { active: @user_more.active, born: @user_more.born, comefrom: @user_more.comefrom, content: @user_more.content, create_man: @user_more.create_man, fax: @user_more.fax, firstname: @user_more.firstname, lastname: @user_more.lastname, plugins: @user_more.plugins, select_count: @user_more.select_count, state: @user_more.state, tel: @user_more.tel, update_man: @user_more.update_man }
    end

    assert_redirected_to user_more_path(assigns(:user_more))
  end

  test "should show user_more" do
    get :show, id: @user_more
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @user_more
    assert_response :success
  end

  test "should update user_more" do
    put :update, id: @user_more, user_more: { active: @user_more.active, born: @user_more.born, comefrom: @user_more.comefrom, content: @user_more.content, create_man: @user_more.create_man, fax: @user_more.fax, firstname: @user_more.firstname, lastname: @user_more.lastname, plugins: @user_more.plugins, select_count: @user_more.select_count, state: @user_more.state, tel: @user_more.tel, update_man: @user_more.update_man }
    assert_redirected_to user_more_path(assigns(:user_more))
  end

  test "should destroy user_more" do
    assert_difference('UserMore.count', -1) do
      delete :destroy, id: @user_more
    end

    assert_redirected_to user_mores_path
  end
end
