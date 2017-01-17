class Protocol < ActiveRecord::Base
  belongs_to :micropost
  velidetes :micropost_id, presence: true
  velidetes :procedure, presence: true, length: { maximum: 500 }
end
