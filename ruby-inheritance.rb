


# Ruby- Inheritance



# str = Delta

# str.include? 'de'
# => false

# str.include? 'De'
# => true

class Hulu
    attr_accessor :title, :run_time
    def initialize(title, run_time)
        @title = title
        @run_time = run_time
        @watched = false
    end 

    def get_show_data
        "The show #{@title} is #{@run_time} long"
    end
end


class StreamingApp
    attr_accessor :title, :run_time, :consumed
    def initialize(title, run_time)
        @title = title
        @run_time = run_time
        @consumed = false
    end
    def get_show_data
        "The media #{@title} is #{@run_time} long"
    end
    def didConsume 
        @consumed = true
    end
end

# create child class - class App extends React
class Netflix < StreamingApp
    def initialize(title_parameter, run_time_parameter, rating_parameter)
        # super passes what is passed from the parent class
        super(title_parameter, run_time_parameter)
        @rating = rating_parameter
    end
end

strangerThings = Netflix.new("Stranger Things", "50mins", "PG-13")

p strangerThings

p strangerThings.get_show_data

p strangerThings.consumed

class AudioMac < StreamingApp
    def initialize(title_parameter, run_time_parameter, artist_parameter)
        super(title, run_time)
        @artist = artist_parameter
    end

end

p portfolios = AudioMac.new('Portfolios', '1:36 min', 'MixMaster Elyse')

portfolios.didConsume

p portfolios.consumed

p portfolios