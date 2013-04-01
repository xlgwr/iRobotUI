class CreateImenus < ActiveRecord::Migration
  def change
    create_table :imenus do |t|
      t.integer :a_attr
      t.integer :li_attr
      t.string :title
      t.integer :children
      t.integer :data
      t.text :content
      t.string :version
      t.string :create_man
      t.string :edit_man

      t.timestamps
    end
  end
end
