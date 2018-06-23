class AddFieldsToPosts < ActiveRecord::Migration[5.2]
  def change
    change_table :posts do |t|
      t.boolean :published, :default => false
      t.datetime :published_at, :default => nil
    end
  end
end
