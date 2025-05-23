package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailManager 
{
  @Autowired
  JavaMailSender mail;
  public String sendEmail(String fromemail,String toemail,String text)
  {
    try
    {
    SimpleMailMessage smm=new SimpleMailMessage();
    smm.setFrom(fromemail);
    smm.setTo(toemail);
    smm.setText(text);
    mail.send(smm);
    return "email sent Successfully";
    }
    catch (Exception e) 
    {
      return e.getMessage();
    }
    
  
  }

}