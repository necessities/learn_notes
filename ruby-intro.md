# Ruby Introduction 7/7/2022

Ruby was created by MATZ; matz is nice so we are nice = MINASWAN

Ruby - Dynamic programming language - dynamically typed - dont have to declare a data type when declaring a variable

Interpreted - does not need to be compiled 

Open Source - codebase is usable by anyone

Scripting language - performing logic and making evaluations

OOP = Object oriented, an instance of a class


repl = read evaluate print loop

irb = lets you enter ruby console

ruby = lets you run file: ruby ruby-intro.rb

math operators: + - * / ** % 

logical operators: > < >= <= == (strictly equals) != && || 

        ex. 'hi' == 'hi' && 4 > 3 ; 'hi' == 'hi' || 4 < 3 (logical and, logical or)

other operators: << (shovel)

Ruby Data Types - Integers, Floats, Strings, Boolean,  Nil, Symbol , Arrays

variables - rules - NO VAR LET OR CONST to delcare - snake_case for variable_names 
    ex my_name = 'alex' 

string interpolation: "Hey there #{my_name}"

Everything is a object in ruby, thus you can call methods on them
    ex my_name.length       (4)
    ex my_name.upcase       (ALEX)
    ex my_name.capitalize   (Alex)
    ex my_name.reverse      (xela)
    ex my_name.delete('a')  (lex)
the methods are only accesors and will not change the data permanently

    my_name.include?('a')    returns a boolean
    my_name.class            returns name of datatype(class)
    true.class               TrueClass
    false.class              FalseClass

                converting variables
    4.to_s                   turns 4 into "4"
    '9'.to_i                 turns '9' into 9

    Arrays - they are 0 indexed

    my_nums = [2, 3, 45, 5]
    my_nums.length          4
    my_nums[0]              2
    my_nums.first           2
    my_nums.last            5
    my_nums.reverse         [5, 45, 3, 2]
    my_nums << 99           [2, 3, 45, 5, 99] - SHOVEL OPERATOR


