class Menubom < ActiveRecord::Base
  attr_accessible :active, :content, :create_man, :end_date, :menu_children, :menu_parent, :plugins, :select_count, :start_date, :update_man
end
