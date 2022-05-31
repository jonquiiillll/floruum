class Article < ApplicationRecord
    scope :filter_by_hashtag, -> (hashtag) { where hashtag: hashtag }
		validates :name, :presence => true
		validates :title, :presence => true,
											:length => { :minimum => 5 }
		mount_uploader :preview, PreviewUploader
		has_many :article_comments, :dependent => :destroy
		belongs_to :hashtag
end
