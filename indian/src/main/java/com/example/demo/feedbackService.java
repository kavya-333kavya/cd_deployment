package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class feedbackService {

  @Autowired
  FeedbackDAO dao;
  
  @PostMapping("/addfeedback")
  public String insertfeed(@RequestBody Feedback feed) {
    dao.insert(feed);
    return "feedback submitted!";
  }
             
  @GetMapping("/getfeedback")       
  public List<Feedback> getfeedback() {
    return dao.getallfeedbacks();
  }
  
  @PutMapping("/updatefeedback")
  public String updatefeedback(@RequestBody Feedback f) {
    return dao.feedbackupdate(f).toString();
    
  }
  
}