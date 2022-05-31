class Addition < ApplicationRecord
  belongs_to :story
  belongs_to :user
  def as_json(options = nil)
    {
      id: id,
      username: User.find(user_id).username,
      body: body,
    }
  end
end
