class User < ApplicationRecord
  mount_uploader :avatar, AvatarUploader
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :likes, dependent: :destroy
  has_many :favorites, dependent: :destroy
has_many :favorited_posts, :through => :favorites, :source => :post

has_many :followed_users, foreign_key: :follower_id, class_name: 'Follow'
has_many :followees, through: :followed_users
has_many :following_users, foreign_key: :followee_id, class_name: 'Follow'
has_many :followers, through: :following_users

has_many :posts, dependent: :destroy
has_many :categories, dependent: :destroy

has_many :mines, dependent: :destroy
has_many :mines_posts, :through => :mines, :source => :story
end
