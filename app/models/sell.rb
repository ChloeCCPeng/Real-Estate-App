class Sell < ApplicationRecord 
    belongs_to :seller, foreign_key: "seller_id", class_name: 'User'
    belongs_to :browser, foreign_key: "browser_id", class_name: 'User'
end