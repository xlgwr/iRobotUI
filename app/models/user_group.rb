class UserGroup < ActiveRecord::Base
  attr_accessible :active, :content, :create_man, :end_date, :group, :plugins, :select_count, :start_date, :update_man, :user
end
