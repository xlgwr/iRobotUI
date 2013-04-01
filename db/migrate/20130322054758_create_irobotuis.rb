class CreateIrobotuis < ActiveRecord::Migration
  def change
    create_table :irobotuis do |t|
      t.string :themesid
      t.integer :menuid
      t.integer :userid

      t.timestamps
    end
  end
end
