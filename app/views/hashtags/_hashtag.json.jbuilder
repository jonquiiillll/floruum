json.extract! hashtag, :id, :name, :description, :display_in_navbar, :created_at, :updated_at
json.url hashtag_url(hashtag, format: :json)
