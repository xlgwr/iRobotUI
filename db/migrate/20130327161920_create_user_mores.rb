class CreateUserMores < ActiveRecord::Migration
  def change
    create_table :user_mores do |t|
      t.date :born
      t.string :tel
      t.string :fax
      t.string :firstname
      t.string :lastname
      t.string :state
      t.string :comefrom
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
