package com.example.NiitBank.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Statements {
@Id @GeneratedValue
private int StatementId;


private int Sender;
private int Receiver;
private int Credit;
private int Debit;
private int Balance;
private Date Date;
private String Remark;

public int getStatementId() {
	return StatementId;
}
public void setStatementId(int statementId) {
	StatementId = statementId;
}

public int getSender() {
	return Sender;
}
public void setSender(int sender) {
	Sender = sender;
}
public int getReceiver() {
	return Receiver;
}
public void setReceiver(int receiver) {
	Receiver = receiver;
}
public int getCredit() {
	return Credit;
}
public void setCredit(int credit) {
	Credit = credit;
}
public int getDebit() {
	return Debit;
}
public void setDebit(int debit) {
	Debit = debit;
}
public int getBalance() {
	return Balance;
}
public void setBalance(int balance) {
	Balance = balance;
}
public Date getDate() {
	return Date;
}
public void setDate(Date date) {
	Date = date;
}
public String getRemark() {
	return Remark;
}
public void setRemark(String remark) {
	Remark = remark;
}
@ManyToOne
@JoinColumn(name="AccountId")
Users u;


public Users getU() {
	return u;
}
public void setU(Users u) {
	this.u = u;
}


}
