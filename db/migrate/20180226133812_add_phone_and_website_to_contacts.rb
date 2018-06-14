class AddPhoneAndWebsiteToContacts < ActiveRecord::Migration[5.1]
  def change
    add_column :contacts, :phone, :integer
    add_column :contacts, :website, :string
  end
end
