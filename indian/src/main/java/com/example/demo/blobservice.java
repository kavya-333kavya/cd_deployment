package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class blobservice {

  @Autowired
  BlogDao dao;
  
  @PostMapping("/addpost")
  public String addpost(@RequestBody Blog b) {
    return dao.add(b);
  }
  
  @DeleteMapping("/deletepost")
  public String deletepost(@RequestParam("id") int id) {
    return dao.delete(id);
  }
  
  
  @PutMapping("/editpost")
  public String editpost(@RequestBody Blog b) {
    return dao.edit(b);  
  }
  
  @GetMapping("/allposts")
  public List<Blog> getposts() {
    return dao.all();
  }
  
  
  @GetMapping("/userposts")
  public List<Blog> getuserposts(@RequestParam("email") String email){
    return dao.repo.findByUemail(email);
  }
  
}