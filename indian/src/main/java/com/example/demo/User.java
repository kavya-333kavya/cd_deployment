package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="users")
public class User {

  private String fname;
  private String lname;
  @Id
  private String email;
  private String password;
  public String getFname() {
    return fname;
  }
  public void setFname(String fname) {
    this.fname = fname;
  }
  public String getLname() {
    return lname;
  }
  public void setLname(String lname) {
    this.lname = lname;
  }
  public String getEmail() {
    return email;
  }
  public void setEmail(String email) {
    this.email = email;
  }
  public String getPassword() {
    return password;
  }
  public void setPassword(String password) {
    this.password = password;
  }
  @Override
  public String toString() {
    return "User [fname=" + fname + ", lname=" + lname + ", email=" + email + ", password=" + password + "]";
  }
  
}