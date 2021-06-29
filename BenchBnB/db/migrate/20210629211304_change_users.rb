class ChangeUsers < ActiveRecord::Migration[5.2]
  def change
    change_table :users do |t|
      t.remove :email
      t.string :username, unique: true, null: false
    end
  end
end
