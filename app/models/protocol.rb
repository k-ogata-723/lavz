class Protocol < ActiveRecord::Base
  belongs_to :micropost
  validates :micropost_id, presence: true
  validates :procedure, presence: true, length: { maximum: 500 }
end
