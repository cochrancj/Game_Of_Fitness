class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
    t.string :name
    t.integer :mana
    t.string :img

    t.timestamps null: false
    end
  end
end
