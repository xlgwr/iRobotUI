class CreateManMenus < ActiveRecord::Migration
  def change
    create_table :man_menus do |t|
      t.integer :user
      t.integer :menu
      t.date :start_date
      t.date :end_date
      t.integer :select_count
      t.boolean :active
      t.integer :plugins
      t.string :create_man
      t.string :update_man
      t.text :content

      t.timestamps
    end
  end
end
