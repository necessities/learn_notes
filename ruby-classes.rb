


# Ruby Classes

p true.class

#=> TrueClass

p 1.class

# => integer

p 5.0.class 

# => Float 

# PascalCase 
class Hulu
    # attribute accessor, helper method
    attr_accessor :title 
    # initialize a recgonized method in ruby - replaces def title on line 34


    def initialize(title, run_time)
        @title = title
        @run_time = run_time
        @genre = "drama"
    end 

    def get_show_data
        "The show #{@title} is #{@run_time} long"
    end
    # def title
    #     @title
    # end
    def set_genre(genre)
        @genre = genre 
    end
end

# create a new instance of the class; creates a unique object
# p Hulu.new - works unless there is a initialize method 

greenleaf = Hulu.new('Greenleaf', '45min')
# p greenleaf.initialize('Greenleaf', '45min')
p greenleaf


# Need to give our class something to do
# getting (seeing data) and setting (creating data)
# @ - instance variable, a variable that belongs to the class 

# setting data - has its own method 
letterKenney = Hulu.new('Letter Kenny','30min')
# letterKenney.set_show_data('Letter Kenny','30min')
p letterKenney

# getting data - has its own method 
p letterKenney.get_show_data

p letterKenney.title # - created simple method to return only title 






