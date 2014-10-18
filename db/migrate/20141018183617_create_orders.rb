class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.integer :amount
      t.datetime :shipdate

      t.timestamps
    end
  end
end
