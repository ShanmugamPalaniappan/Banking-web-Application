package com.example.NiitBank.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

@Entity
public class Users {
	@Id @GeneratedValue
	private int UserId;
	private String Email;
	private String Name;
    private String Password;
	private String Role;
    private int Balance;
    
	public int getUserId() {
		return UserId;
	}
	public void setUserId(int userId) {
		UserId = userId;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public String getRole() {
		return Role;
	}
	public void setRole(String role) {
		Role = role;
	}
	public int getBalance() {
		return Balance;
	}
	public void setBalance(int balance) {
		Balance = balance;
	}
	
 @Override
	public String toString() {
		return "Users [UserId=" + UserId + ", Email=" + Email + ", Name=" + Name + ", Password=" + Password + ", Role="
				+ Role + ", Balance=" + Balance + ", allStatements=" + allStatements + "]";
	}

@OneToMany
 (targetEntity=Statements.class,cascade=CascadeType.ALL)
 @JoinColumn(name="AccountId",referencedColumnName="userId")
  List<Statements> allStatements;

public void setAllStatements(List<Statements> allStatements) {
	this.allStatements = allStatements;
}
//public List<Statements> getAllStatements() {
//	return allStatements;
//}



    
}
