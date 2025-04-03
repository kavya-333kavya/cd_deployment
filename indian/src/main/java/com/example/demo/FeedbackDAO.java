package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class FeedbackDAO {

  @Autowired
  FeedbackInterface repo;

  public void insert(Feedback feed) {
    repo.save(feed);
    
  }

  public List<Feedback> getallfeedbacks() {
    // TODO Auto-generated method stub
    return repo.findAll();
  }

  public Feedback feedbackupdate(Feedback f) {
    Feedback p=repo.findByEmail(f.getEmail());
    repo.delete(p);
    repo.save(f);
    return f ;
  }
  
  
}