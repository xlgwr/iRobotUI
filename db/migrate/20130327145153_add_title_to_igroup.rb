class AddTitleToIgroup < ActiveRecord::Migration
  def change
	add_column :igroups, :title, :string
  end
end
