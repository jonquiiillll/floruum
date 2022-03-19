class Article < ApplicationRecord
		validates :name, :presence => true
		validates :title, :presence => true,
											:length => { :minimum => 5 }
		mount_uploader :preview, PreviewUploader
		has_many :article_comments, :dependent => :destroy
		belongs_to :hashtag
end
