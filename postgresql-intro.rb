

# Postgresql and Database

class Student
    def initialize(name, cohort)
        @name = name
        @cohort = cohort
    end
end

Create instances: 

Student.new('Alex', 'Delta')

#Model - class, define data
#each row in a database is an instance of the class

## Postgres (PostgresSQL)
# SQL - Structured Query Language, columns and rows
# NOSQL - Not only structured query language - MONGODB






#general purpose languages - Javascript, Ruby
#domain specific languages - HTML, RSpec, postgres 
#postgres talks to the database

#open source, Object-relational database management system 
# oop approach to programming

# use psql to get version
# psql \l to show all databases
# brew services start postgresql
# psql postgres
# use \q to quit


# use pgadmin for gui

# sample sql query

# SELECT name, surfacearea, population,
# population / surfacearea AS density
# FROM country
# WHERE population > 0
# ORDER BY density ASC
# LIMIT 5