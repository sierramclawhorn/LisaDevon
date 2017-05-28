class ContactMailer < ApplicationMailer

  def contact_me(email_params)
    @contact_info = email_params

    mail from: @contact_info['email'], to: "sierramclawhorn@gmail.com", subject: "Portfolio Contact: #{ @contact_info['subject'] }"
  end

end