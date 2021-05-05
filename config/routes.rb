# frozen_string_literal: true
Rails
  .application
  .routes
  .draw do
    root 'pages#index', as: :pages_index
    get '*path', to: 'pages#index'
  end
