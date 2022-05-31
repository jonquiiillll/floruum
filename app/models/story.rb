class Story < ApplicationRecord
	  scope :filter_by_starts_with, -> (title) { where("title like ?", "%#{title}%")}
		validates :name, :presence => true
		validates :title, :presence => true,
											:length => { :minimum => 5 }
    has_many :points, :dependent => :destroy
		mount_uploader :picture, PictureUploader

		belongs_to :sort
		belongs_to :user

		def as_json(options = nil)
			{
				id: id,
				cate: Sort.find(sort_id).name,
				name: name,
				user_id: user_id,
				user: user,
				username: User.find(user_id).username,
				points: points,
				title: title,
				content: content,
				remark: remark,
				picture: picture,
			}
		end
end
