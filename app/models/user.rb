class User < ApplicationRecord
    has_secure_password
    has_many :messages
    has_many :messages, :foreign_key => 'receiver'
    has_one :address
  
    validates :username, uniqueness: true, presence: true
    validates :password, presence: true, length: {:minimum => 8}
    validates :email, uniqueness: true, presence: true
    #validates :address
  end
  