class CreateOffers < ActiveRecord::Migration[6.1]
  def change
    create_table :offers do |t|
      t.integer :amount
      t.integer :user_id
      
      t.timestamps
    end
  end
end
