User.destroy_all
House.destroy_all
Message.destroy_all
Watchlist.destroy_all
Offer.destroy_all

puts " Seeding data...."

puts " 👥 Creating users "
20.times do
    User.create(firstName: Faker::Name.first_name, lastName: Faker::Name.last_name, email: Faker::Internet.email, password: "password", phoneNumber: Faker::PhoneNumber.cell_phone)
end

puts " 👀 Creating watchlist "
10.times do
    Watchlist.create(address: Faker::Address.full_address, user_id: User.pluck(:id).sample)
end

puts " 💰 Creating offers "
20.times do
    Offer.create(amount: rand(200000..5000000), user_id: User.pluck(:id).sample)
end

puts " 💬 Creating messages "
10.times do
    Message.create(user_id: User.pluck(:id).sample, conversation: "hi, is the house still available?")
end

puts " 🏡 Creating houses "
20.times do
    House.create(address: Faker::Address.full_address, lotSizeAcres: rand(0.1..40), lotSizeSquareFeet: rand(1500..4500), listPrice: rand(200000..5000000), bathroomsTotal: rand(1..10), bedroomsTotal: rand(1..15), photo: Faker::LoremFlickr.image)
end

puts " Done seeding "
