class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :firstname
      t.string :lastname
      t.boolean :subscribe, default: true

      t.timestamps
    end
  end
end
