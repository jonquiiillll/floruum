class Art < ApplicationRecord

		validates :name, :presence => true
		validates :title, :presence => true,
											:length => { :minimum => 5 }

    has_many :marks, :dependent => :destroy
    mount_uploader :pic, PicUploader
end
