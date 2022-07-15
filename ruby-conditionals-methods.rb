


# Conditionals & Methods



# Ruby Methods - 
    # define method with def - name - end method with word 'end' - ruby has implicit return - returns the last line of funtcion 
        
    def greeter 
        'Hello world!'
    end 

    # invoke method by printing and calling method name
    puts greeter




# methods with arguments

    def greeter2 name 
        " Hello #{name}"
    end


    puts greeter2 "Alex"

# multiple arguments

def multiply (num1, num2) 
    num1 * num2
end

p multiply 3, 7 
p multiply 4, 9

def add_three_numbers (num1, num2, num3) 
    num1 + num2 + num3
end

add_three_numbers 3, 6, 7


 # Conditionals

 # 'if'  'elsif'  'else'; if needs an end

 def greater_num (num1, num2) 
    if num1 > num2
        "#{num1} is greater"
    elsif num2 < num1
        "#{num2} is greater"
    else
        "#{num1} and #{num2} are equal"
    end
 end

p greater_num 7, 1
puts greater_num 20, 20

# Getting user input

# gets is a method that will stop the execution of the program and wait for user input; all input is a string

# my_name = gets
# p my_name

# chomp method - remove \n which is a character line break

# my_age = gets.chomp
# p age

puts 'Please enter your name'
user_name = gets.chomp 
p user_name.class

puts 'Please enter your age'
user_age = gets.chomp.to_i
p user_age.class

def can_you_vote(name, age) 
    if age >= 18
        "Hi #{name}! #{age} is old enough to vote."
    else
        "Hi #{name}! #{age} is not old enough to vote."
    end
end

p can_you_vote(user_name, user_age)