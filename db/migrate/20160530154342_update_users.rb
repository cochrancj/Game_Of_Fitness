class UpdateUsers < ActiveRecord::Migration
  def change
    add_column :users, :race, :string
    add_column :users, :guild, :string
    add_column :users, :mana, :integer
    add_column :users, :loot, :string
  end
end
