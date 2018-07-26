class PagesController < ApplicationController

  def home
    @contact = Contact.new

    respond_to do |format|
      format.html { render layout: 'homepage'}
    end

  end

  def contact
    @contact = Contact.new(contact_params)

    if @contact.save
      # Deliver the signup email
      MessageMailer.send_message_notifier(@contact).deliver
      MessageMailer.send_message(@contact).deliver
      respond_to do |format|
        format.js
      end
    else
      flash[:notice] = "Meldingen kunne ikke sendes. Venligst prøv igjen."
      render :new
    end
  end

  def homepage
    @projects = Project.all
    @contact = Contact.new
  end

  def show
    respond_to do |format|
      format.html { render layout: 'homepage'}
    end
  end

private

  def contact_params
    params.require(:contact).permit(:name, :email, :phone_number, :website, :body)
  end

end
