# frozen_string_literal: true
class PagesController < ActionController::Base # rubocop:disable Rails/ApplicationController
  def index
    render file: 'public/packs/index.html'
  end
end
