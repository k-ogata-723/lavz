class CreateProtocols < ActiveRecord::Migration
  def change
    create_table :protocols do |t|
      t.text :procedure
      t.references :micropost, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
