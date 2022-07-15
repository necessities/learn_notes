
# respec is a a ruby gem 
#TDD - test driven development - teest first code later

# test file name: rspec_spec.rb

require 'rspec'
require_relative 'rspec.rb'


describe 'Book' do
    it 'has to be real' do
        expect { Book.new }.to_not raise_error
    end

    it 'has a title' do
        my_book = Book.new

        my_book.title = 'The Hobbit'

        expect(my_book.title).to be_a String
        expect(my_book.title).to eq 'The Hobbit'
    end

    it 'has an author' do
        my_book = Book.new
        expect(my_book.author).to be_a String
        expect(my_book.author).to eq 'anonymous'
        the_hobbit = Book.new 'J.R.R Tolkien'
        expect(the_hobbit.author).to eq 'J.R.R Tolkien'
    end

    it 'can report the current page' do
        my_book = Book.new
        expect(my_book.page).to be_a Integer
        expect(my_book.page).to eq 1
    end

    it  'can read pages' do
        my_book = Book.new
        expect{ my_book.read 10 }.to change{ my_book.page }.from(1).to(11)

    end

end


# -- seperate file?
#file name rspec.rb
# command: rspec rspec_spec.rb
class Book
    attr_accessor :title :author :page
    def initialize author=anonymous # when initialized if there is nothing passed for author it will be assigned this anonymous value
        @title = title
        @author = author
        @page = 1
    end

    def read pages_read
        @page += pages_read

    end

end