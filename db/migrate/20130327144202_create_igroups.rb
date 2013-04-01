class CreateIgroups < ActiveRecord::Migration
  def change
    create_table :igroups do |t|
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
