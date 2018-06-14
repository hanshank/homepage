class ChangeNameInContacts < ActiveRecord::Migration[5.1]
  def change
    remove_column :contacts, :first_name, :string
    remove_column :contacts, :last_name , :string
    add_column :contacts, :name, :string
  end
end
