# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.find_or_create_by(description: "aaaa", lat: 37.751374, lng: -122.436579)
Bench.find_or_create_by(description: "bbbb", lat: 37.755556, lng: -122.431494)
Bench.find_or_create_by(description: "cccc", lat: 37.721635, lng: -122.395166)
Bench.find_or_create_by(description: "dddd", lat: 37.762647, lng: -122.494815)