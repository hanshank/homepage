class ChangeFieldsInContacts < ActiveRecord::Migration[5.2]
  def change
    rename_column :contacts, :phone, :phone_number
    rename_column :contacts, :message, :body
  end
end
