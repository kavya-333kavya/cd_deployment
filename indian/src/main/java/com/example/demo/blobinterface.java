package com.example.demo;

import org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.*;

public interface blobinterface extends JpaRepository<Blog, Integer> {
  

  public List<Blog> findByUemail(String email);

  

}