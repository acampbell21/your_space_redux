class CreateProfiles < ActiveRecord::Migration[5.1]
  def change
    create_table :profiles do |t|
      t.string :name
      t.text :bio
      t.string :location
      t.string :avatar

      t.timestamps
    end
  end
end
