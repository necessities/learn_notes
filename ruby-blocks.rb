

# Ruby blocks - Iteration

# anonymous function = block

# while - needs a starting and ending point, condition starts as true and runs till false

num = 1 
while num <= 10 
    num += 1
    p num 
end 


# methods can takes anonymous functions which are called blocks

# blocks can be defined with: do / end or {}

# Times method - can specify amount of times ran

7.times do 
p "hello, world!"
end 

7.times { p 'hello, world!'}

test_num = 7

test_num.times { p 'it works!'}

# Each - iterator that works on a list of items; it works on arrays

nums_array = [3,4,5] 

nums_array.each do |value|
    p value * 5
end

# -- Ranges
# list of values => give start and end seperated by 2 dots

# p 1..10

num_range = 1..10
num_range.each do |value|
    p value
end

letters_range = 'a'..'p'
letters_range.each do |value|
    p value
end

p letters_range.to_a # converts the range to an array

# -- MAP
# iterator; returns an array same length of the thing your acting on

mapped = num_range.map do |value|
    value * 3
end

p mapped

mapped_even = num_range.map do |value|
    if value % 2 == 0 
        'even'
    else 
        value
    end
end

p mapped_even

# with built in even method 
mapped_even2 = num_range.map do |value|
    if value.even?
        'even'
    else 
        value
    end
end

p mapped_even2

def even_or_odd array1 
    array1.map do |value|
        if value.even?
            'even'
        else
            'odd'
        end
    end
end

test_array = 1..10

p even_or_odd test_array


#--- SELECT
# like .filter
# iterator; as a built in if statement, returns a subset of the array that meets conditions 

def only_odds array 
    array.select do |value|
        value.odd? 
    end
end

p only_odds 1..10
