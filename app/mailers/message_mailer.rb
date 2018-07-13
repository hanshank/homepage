class MessageMailer < ApplicationMailer
  default :from => "hansmhank@gmail.com"

  # send a signup email to the user, pass in the user object that   contains the user's email address
  def send_message(contact)
    @contact = contact
    mail( :to => 'hansmhank@gmail.com',
    :subject => "Du har fått en ny melding fra #{contact.name}" )
  end

  def send_message_notifier(contact)
    @contact = contact
    mail( :to => contact.email,
    :subject => 'Takk, Vi har mottatt meldingen din' )
  end
end
