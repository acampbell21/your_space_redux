200.times do
  title = Faker::WorldOfWarcraft.hero
  description = Faker::WorldOfWarcraft.quote
  Post.create(title: title, description: description)
end

200.times do
  name = Faker::LordOfTheRings.character
  bio = Faker::Hobbit.quote
  location = Faker::LordOfTheRings.location
  avatar = Faker::Avatar.image(name, '50x50', 'png', 'set1')
  Profile.create(name:name, bio:bio, location:location, avatar:avatar)
end
puts 'Your database has been seeded with users and posts!!!!!!'
