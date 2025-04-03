package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/email")
public class EmailController 
{
  @Autowired
  EmailManager em;
  
  @Autowired
  UserInterface u;
  @Autowired
  FeedbackInterface f;
  @GetMapping("/send")
  public String send(@RequestParam("email") String email)
  {
	  Feedback f1=f.findByEmail(email);
	  f1.setSent(true);
	   f.save(f1);
    String frommail="jashruthamanepalli@gmail.com";
    String toemail=email;
   
    String Name= f1.getName();
    String text=
    		 "\r\n"
    		
    		+ "\r\n"
    		+ "Subject: Thank You for Your Feedback!\r\n"
    		+ "\r\n"
    		+ "Dear " + Name + ",\r\n"
    		+ "\r\n"
    		+ "Thank you for visiting our website and sharing your feedback. We truly appreciate your time and thoughts.\r\n"
    		+ "\r\n"
    		+ "Our goal is to celebrate and share the beauty of Indian culture, and your input helps us improve and inspire others. If you have any more suggestions or ideas, we’d love to hear from you.\r\n"
    		+ "\r\n"
    		+ "Thanks again for your support!  \r\n"
    		+ "\r\n"
    		+ "Best regards,  \r\n"
    		+ "Team IndiaInsight  \r\n"
    		+ "IndiaInsight \r\n"
    		+ "\r\n"
    		+ "--- \r\n"
    		+ "\r\n";
    
    return em.sendEmail(frommail, toemail, text);
    
  }
  

}