package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.*;
@Component
public class UserDAO {
  
  @Autowired
  UserInterface repo;
  
  private String currentemail;
  public void setcurrentemail(String email) {
    this.currentemail=email;
  }
  public String getcurrentemail() {
    return currentemail;
  }
  public void insert(User user) {
    repo.save(user);
    
  }

  public User findbymail(String email) {
    
    return repo.findByEmail(email);
  }
  public List<User> getAllusers() {
     
    return repo.findAll();
  }
  public User userupdate(User u) {
    User u1=repo.findByEmail(u.getEmail());
    repo.delete(u1);
    repo.save(u);
    return u;
  }
  
  

}