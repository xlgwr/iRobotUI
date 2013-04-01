class CreateUserGroups < ActiveRecord::Migration
  def change
    create_table :user_groups do |t|
      t.integer :user
      t.integer :group
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
