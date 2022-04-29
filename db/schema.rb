# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_04_29_032353) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "houses", force: :cascade do |t|
    t.string "address"
    t.integer "lotSizeAcres"
    t.integer "lotSizeSquareFeet"
    t.integer "associationFee"
    t.integer "listPrice"
    t.integer "bathroomsTotal"
    t.integer "bedroomsTotal"
    t.integer "mainLevelBathrooms"
    t.integer "fireplacesTotal"
    t.string "fireplaceFeature"
    t.integer "garageSpaces"
    t.integer "bathroomHalf"
    t.integer "storiesTotal"
    t.text "publicRemarks"
    t.integer "livingArea"
    t.integer "yearBuilt"
    t.text "yearBuiltDetails"
    t.string "standardStatus"
    t.string "propertyType"
    t.string "propertySubType"
    t.date "listingContractDate"
    t.integer "previousListPrice"
    t.integer "originalListPrice"
    t.string "contingency"
    t.integer "numberOfUnitsTotal"
    t.string "listingTerms"
    t.integer "daysOnMarket"
    t.string "appliances"
    t.integer "roomsTotal"
    t.string "exteriorFeatures"
    t.string "flooring"
    t.string "foundationDetails"
    t.string "frontageType"
    t.string "gas"
    t.string "accessibilityFeatures"
    t.string "heating"
    t.string "occupantType"
    t.string "roadSurfaceType"
    t.string "roof"
    t.string "constructionMaterials"
    t.string "sewer"
    t.integer "carportSpaces"
    t.boolean "openParkingYN"
    t.string "laundryFeatures"
    t.text "privateRemarks"
    t.integer "taxAssessedValue"
    t.integer "taxAnnualAount"
    t.string "taxYear"
    t.string "subdivisionName"
    t.string "buyerFinancing"
    t.boolean "homeWarrantyYN"
    t.string "architecturalStyle"
    t.string "comunityFeatures"
    t.string "patioAndPorchFeatures"
    t.string "otherStructures"
    t.boolean "attachedGarage"
    t.boolean "carportYN"
    t.date "contigentDate"
    t.boolean "associationYN"
    t.string "associationName"
    t.string "associationFeeFrequency"
    t.text "associationFeeIncludes"
    t.string "photo"
    t.string "showingContactPhone"
    t.string "showingContactName"
    t.text "exclusions"
    t.text "inclusions"
    t.string "elementarySchool"
    t.string "elementarySchoolDistrict"
    t.string "middleOrJuniorSchool"
    t.string "middleOrJuniorSchoolDistrict"
    t.string "highSchool"
    t.string "highSchoolDistrict"
    t.boolean "garageYN"
    t.string "levels"
    t.string "builderName"
    t.string "builderModel"
    t.text "interiorFeatures"
    t.text "greenEnergyEfficient"
    t.integer "walkScore"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "messages", force: :cascade do |t|
    t.text "conversation"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "offers", force: :cascade do |t|
    t.integer "amount"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "sells", force: :cascade do |t|
    t.integer "seller_id"
    t.integer "browser_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password"
    t.string "firstName"
    t.string "lastName"
    t.string "phoneNumber"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "watchlists", force: :cascade do |t|
    t.string "address"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
