class MessageNotifierMailer < ApplicationMailer
  default :from => "hansmhank@gmail.com"

  # send a signup email to the user, pass in the user object that   contains the user's email address
  def send_message_notifier(contact)
    @contact = contact
    mail( :to => contact.email,
    :subject => 'Vi har mottatt meldingen din' )
  end



end
