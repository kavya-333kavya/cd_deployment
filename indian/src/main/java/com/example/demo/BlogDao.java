package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BlogDao {
  @Autowired
  blobinterface repo;
  
  public String add(Blog b) {
    repo.save(b);
    return "added";
  }
  
  public String delete(int id) {
    repo.deleteById(id);
    return "deleted";
    
  }

  public String edit(Blog b) {
    repo.deleteById(b.getId());
    repo.save(b);
    return "updated";
  }
  
  public List<Blog> all(){
    return repo.findAll();
  }
}