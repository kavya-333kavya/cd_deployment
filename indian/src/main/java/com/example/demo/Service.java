package com.example.demo; 

import java.util.List;

import org.hibernate.boot.jaxb.hbm.spi.JaxbHbmSynchronizeType;
import org.slf4j.helpers.Reporter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController  
@CrossOrigin
public class Service {
  @Autowired
  UserDAO dao;
  
  public static String currentuser;
  @GetMapping("/hello/{name}")
  public String hello(@PathVariable("name") String name) {
    return "hello!! " +name;
  }
  
  @PostMapping("/signup")
  public String insertuser(@RequestBody User user) {
    System.out.println(user);
    dao.insert(user);
    return "user inserted";
  }
  
  @GetMapping("/signin")
  public String insertuser(@RequestParam("email")String email,@RequestParam("password") String password) {
    System.out.println(email);
    User u1=dao.findbymail(email);
    
    
    if(u1==null ) {
      
      return "no";
    }
    else {
      if(password.equals(u1.getPassword())) {
        currentuser=u1.getEmail();
        dao.setcurrentemail(email);
        if(email.equals("admin@indiainsight.in")&&password.equals("admin")) {
          
          return "admin";
        }
        else {
          return "yes";
        }
      }
      else {
      return "no";
      }
    }
    
  }
  
  @GetMapping("/allusers")
  public List<User> allusers() {
    return dao.getAllusers();
  }
  
  @PutMapping("/updateUser")
  public String updateuser(@RequestBody User u) {
    return dao.userupdate(u).toString();
  }
  
   
  @GetMapping("/getemail")
  public String getemail() {
    return dao.getcurrentemail();
  }
  
  @DeleteMapping("/deleteuser")
  public String deletetheuser(@RequestParam("email") String email ) {
    dao.repo.delete(dao.findbymail(email));
    return "deleted";
  } 
  @GetMapping("/getuser")
  public String getUser(@RequestParam("email") String email) {
      User user = dao.repo.findByEmail(email); // Assuming findByEmail exists in your User repository
      return user != null ? user.getFname() + " " + user.getLname() : "Unknown User";
  }

  @GetMapping("/loggedinuser")
  public static String  loguser() {
    return currentuser;
  }
}