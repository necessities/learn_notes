


# loop to 20 method 1
loop1 = 1..20

loop1.each do |value|
    p value
end


# loop to 20 method 2
test_num1 = 0


while test_num1 < 20 
    test_num1 = test_num1 + 1
    p test_num1
end

# loop to 20 method 3
test_num2 = 0

20.times do 
    test_num2 = test_num2 + 1
    p test_num2
end
