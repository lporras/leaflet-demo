Rails.application.routes.draw do
  resources :places
  root "places#index"
end
