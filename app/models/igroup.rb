class Igroup < ActiveRecord::Base
  attr_accessible :title,:active, :content, :create_man, :plugins, :select_count, :update_man
end
