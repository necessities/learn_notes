# Ruby hashes

# have key-value pairs; the key is a symbol data typ; value can be any other type of data 

# reference the key to retreive the value of a ruby hash

# Hash structure:
# {:key => value, :key => value, :key => value, }

person = {:first_name => "Buffy", :last_name => "Summers", :title => "Vampire Slayer"}

p person

# second way to declare hash 

people = Hash.new()

# Manipulating Hashes

# CRUD; Create, Read/Return, Update, Delete

# Read/Return - Read and Return all data in the hash 

example_hash = {first_name: "Alex", last_name: "Ballou", title: "Web Dev"}
p example_hash[:first_name]

# add conent to the hash

example_hash[:computer] = 'apple'
p example_hash

example_hash[:love_interests] = ['zero', 'margo']
p example_hash

# Update content in the hash; just assign the key a new value

example_hash[:title] = "Software Engineer"

p example_hash[:title]

# change key

# example_hash[:bestcomputer] = example_hash(:computer)

# to remove 

example_hash.delete(:last_name)

# ENUMERABLES
# MODULES - way of grouping together like things that have similar properties
# main in ruby is enumerable module 
# Hashes, arrays, ranges 

characters = {slayer: 'Buffy', witch: 'Willow', vampire: 'Spike'}

characters.each do | key, value |
    p "#{value}'s role is the #{key}"
end

def buffy_roles hash 
    hash.map do | key, value |
        "#{value} is a #{key}"
    end
end

p buffy_roles characters








