class ContactsController < ApplicationController
	
	def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash.now[:notice] = 'Thank you for your message. I will be in touch with you soon!'
    else
      flash.now[:error] = 'Cannot send message.'
      render :new
    end
  end

end
