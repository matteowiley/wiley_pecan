class User < ActiveRecord::Base
  #User has many orders
  has_many :orders
 
end
