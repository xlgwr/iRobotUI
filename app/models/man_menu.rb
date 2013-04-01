class ManMenu < ActiveRecord::Base
  attr_accessible :active, :content, :create_man, :end_date, :menu, :plugins, :select_count, :start_date, :update_man, :user
end
