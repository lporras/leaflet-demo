json.extract! place, :id, :name, :address, :latitude, :longitude, :created_at, :updated_at
json.url place_url(place, format: :json)
