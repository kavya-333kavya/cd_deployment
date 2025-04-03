package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "feedbackdb")
public class Feedback {
  private String name;
  @Id
  private String email;
  private boolean sent=false;
  private String rating;
  public boolean isSent() {
	return sent;
}
public void setSent(boolean sent) {
	this.sent = sent;
}
private String comments;
  @Override
  public String toString() {
    return "Feedback [name=" + name + ", email=" + email + ", rating=" + rating + ", comments=" + comments + "]";
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public String getEmail() {
    return email;
  }
  public void setEmail(String email) {
    this.email = email;
  }
  public String getRating() {
    return rating;
  }
  public void setRating(String rating) {
    this.rating = rating;
  }
  public String getComments() {
    return comments;
  }
  public void setComments(String comments) {
    this.comments = comments;
  }

}