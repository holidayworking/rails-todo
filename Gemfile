# frozen_string_literal: true
source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.0.1'

gem 'bootsnap', require: false
gem 'pg'
gem 'puma'
gem 'rails', '6.1.4.1'
gem 'webpacker', '6.0.0.beta.7'

group :development do
  gem 'guard', require: false
  gem 'guard-bundler', require: false
  gem 'guard-rails', require: false
  gem 'guard-rspec', require: false
  gem 'guard-rubocop', require: false
  gem 'guard-webpacker', require: false
  gem 'listen'
  gem 'rubocop', require: false
  gem 'rubocop-performance', require: false
  gem 'rubocop-rails', require: false
  gem 'rubocop-rspec', require: false
  gem 'spring'
  gem 'spring-commands-rspec'
  gem 'spring-commands-rubocop'
end

group :development, :test do
  gem 'byebug'
  gem 'rspec-rails'
end
