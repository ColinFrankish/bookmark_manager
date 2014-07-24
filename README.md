This project is to demonstrate the use of Sinatra with a relational database, incorporating ORM, gems, rspec testing etc. 

The project is to create a resource for people to collect their favourite weblinks. 

Sign in/up/out features added with some basic styling. 

`````shell
launch using 'shotgun' from the terminal and this will be in port 9393 
`````

gems used:
gem 'sinatra'
gem 'data_mapper'
gem 'dm-postgres-adapter'
gem 'bcrypt-ruby'
gem 'rack-flash3'
gem 'sinatra-partial'
gem 'poltergeist'

group :development, :test do
  gem 'rspec'
  gem 'database_cleaner'
  gem 'capybara'
end