require 'test_helper'

class IgroupsControllerTest < ActionController::TestCase
  setup do
    @igroup = igroups(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:igroups)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create igroup" do
    assert_difference('Igroup.count') do
      post :create, igroup: { active: @igroup.active, content: @igroup.content, create_man: @igroup.create_man, plugins: @igroup.plugins, select_count: @igroup.select_count, update_man: @igroup.update_man }
    end

    assert_redirected_to igroup_path(assigns(:igroup))
  end

  test "should show igroup" do
    get :show, id: @igroup
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @igroup
    assert_response :success
  end

  test "should update igroup" do
    put :update, id: @igroup, igroup: { active: @igroup.active, content: @igroup.content, create_man: @igroup.create_man, plugins: @igroup.plugins, select_count: @igroup.select_count, update_man: @igroup.update_man }
    assert_redirected_to igroup_path(assigns(:igroup))
  end

  test "should destroy igroup" do
    assert_difference('Igroup.count', -1) do
      delete :destroy, id: @igroup
    end

    assert_redirected_to igroups_path
  end
end
