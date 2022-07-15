




# Intro to Rails

# Ruby on Rails is a framework written in Ruby
# MVC - Model View Controller 
    # - View - user interaction, HTML, CSS, JS, REACT
    # - Model - Database Layer
    # - Controllers - Like a switchboard; what data should be collected from then send back to construct the view 

    # Check rails version

    # '$rails -v'

    #$rails new app_name -d postgresql -r

    # create local database - rails db:create 

    # psql 

    # $ rails server or rails s
    # navigation to browser and go to 127.0.0.1:3000

# ACTIVE RECORD

# Active record is a gem and a ORM; (object relational mapping) or a translator 

# Database is like a storage room, tables are like filing cabinets, classes and objects are like labels to organize where things are stored

# Database is on the local machine; 
# Rails app - colelction of folders and files
# during production database will be on seperate server 

# MVC 

# MODEL is the class that defines the structure of the database 

# Generate Command
# All models are in pascal case and singular 

# $ rails generate model Schedule day:string date:date event:string 
# invoke active_record
# create 
# create 

# rails db:migrate

# interacting with data
# $ rails c

# $ schedule.all
# schedule.create(day: 'Thursday', date: '2022-07-14', event: 'Office hours')
# schedule.create(day: 'Thursday', date: '2022-07-14', event: 'White Boarding')
# schedule.create(day: 'Friday', date: '2022-07-15', event: ' Week 5 Assessments ')

# CRUD 

# Read
# Schedule.all
# Schedule.first
# Schedule.last
#








