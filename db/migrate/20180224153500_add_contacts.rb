class AddContacts < ActiveRecord::Migration[5.1]
  def change
    create_table :contacts do |t|
     t.string :first_name
     t.string :last_name
     t.string :email
     t.timestamps
    end

    create_table :messages do |t|
     t.string :body
     t.integer :contact_id
     t.timestamps
    end
  end
end
