class House < ApplicationRecord
    has_many :users
    has_many :offers, through: :users
    has_many :watchlists, through: :users

    validates :address, :lotSizeAcres, :lotSizeSquareFeet, :listPrice, :bathroomsTotal, :bedroomsTotal, presence: true
end
