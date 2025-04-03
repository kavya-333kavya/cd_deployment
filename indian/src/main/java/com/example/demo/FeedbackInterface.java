package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackInterface extends JpaRepository<Feedback, String> {

  public Feedback findByEmail(String email);

}