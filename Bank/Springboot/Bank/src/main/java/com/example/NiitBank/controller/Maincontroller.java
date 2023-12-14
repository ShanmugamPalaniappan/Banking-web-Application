package com.example.NiitBank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.example.NiitBank.model.Statements;
import com.example.NiitBank.model.Users;
import com.example.NiitBank.repo.Statementsrepo;
import com.example.NiitBank.repo.Usersrepo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

@RestController
@CrossOrigin
public class Maincontroller {
	@Autowired
	JavaMailSender admin;
	@Autowired
	Usersrepo urepo;
	@Autowired
	Statementsrepo srepo;
	@PostMapping("/")
	String add(@RequestBody Users u)
	{
		
		Users x=urepo.save(u);  //saving user
		Statements s=new Statements();
		//STATEMENT
		s.setCredit(500);
		s.setRemark("Account created"); 
		Date date = new Date();  
		System.out.println(date);
		s.setDate(date);
		s.setU(x);
		s.setBalance(500);
		srepo.save(s);
		return "success";
	}
	
	@PostMapping("/login")
	Users login(@RequestBody Users u)
	{
		Users r=new Users();
		
		for(Users x:urepo.findAll())
		{
			
			if(x.getUserId()==u.getUserId() && u.getPassword().equals(x.getPassword()))
			{
				r.setUserId(x.getUserId());
				r.setName(x.getName());
				r.setRole(x.getRole());
				r.setAllStatements(null);
				break;
			}
		}
		return r;
	}
	@PostMapping("/balance")
	int bal(@RequestBody Users u)
	{
		for(Users x:urepo.findAll())
		{
			if(x.getUserId()==u.getUserId() )
			{
				return x.getBalance();
			}
		}
		return 0;
	}
	@PostMapping("/deposit")
	String dep(@RequestBody Users u)
	{
		try
		{
		
		for(Users x:urepo.findAll())
		{
			
			if(x.getUserId()==u.getUserId() )
			{
				x.setBalance(x.getBalance()+u.getBalance());
				System.out.println(x);
				urepo.save(x);
				
				Statements s=new Statements();
				s.setCredit(u.getBalance());
				s.setRemark("deposit");
				s.setBalance(x.getBalance());
				Date date = new Date();
				s.setDate(date);
				s.setU(x);
				srepo.save(s);
				break;
			}
		}
		return "success";
		}
		catch(Exception e)
		{
			return e+"";
		}
	}
	@PostMapping("/withdraw")
	String wit(@RequestBody Users u)
	{
		try
		{
		
		
		for(Users x:urepo.findAll())
		{
			
			if(x.getUserId()==u.getUserId() )
			{
				int rx=x.getBalance()-u.getBalance();
				if(rx>=0)
				{
					x.setBalance(rx);
					System.out.println(x);
					urepo.save(x);
					Statements s=new Statements();
					s.setBalance(x.getBalance());
					Date date = new Date();
					s.setDate(date);
					s.setDebit(u.getBalance());
					s.setRemark("withdraw");
					s.setU(x);
					srepo.save(s);
					return "success";	
				}
				
			}
		}
		return "failed";
		
		
		}
		catch(Exception e)
		{
			return e+"";
		}
	}
	@PostMapping("/transfer")
	String tra(@RequestBody Statements s)
	{
		try {
			Users senderAccount=null;
			Users receiverAcccount=null;
			Statements st=new Statements();
			Statements st2=new Statements();
			
			for(Users x:urepo.findAll())
			{
				//System.out.println(x.getUserId()+" "+s.getSender()+" "+s.getReceiver()+" "+s.getDebit());
				if(x.getUserId()==s.getSender()) 
				{
					System.out.println("set");
					senderAccount = x;
				}
				if(x.getUserId()==s.getReceiver()) 
				{
					System.out.println("set");
					receiverAcccount=x;
				}
			}
			System.out.println(senderAccount+" "+receiverAcccount);
			if(senderAccount!=null && receiverAcccount!=null)
			{
				if(senderAccount.getBalance()>=s.getDebit())
				{
					receiverAcccount.setBalance(receiverAcccount.getBalance()+s.getDebit());
					senderAccount.setBalance(senderAccount.getBalance()-s.getDebit());
					urepo.save(senderAccount);
					urepo.save(receiverAcccount);
					
					// SENDER STATEMENT
					st.setU(senderAccount);
					st.setSender(s.getSender());
					st.setReceiver(s.getReceiver());
					st.setDebit(s.getDebit());
					st.setBalance(senderAccount.getBalance());
					st.setRemark("transfer to "+s.getReceiver());
					Date date = new Date();
					st.setDate(date);
					srepo.save(st);
					//RECEIVER STATEMENT
					st2.setU(receiverAcccount);
					st2.setSender(s.getSender());
					st2.setReceiver(s.getReceiver());
					st2.setCredit(s.getDebit());
					st2.setBalance(receiverAcccount.getBalance());
					st2.setRemark("tranfer from "+s.getSender());
					//Date date = new Date();
					st2.setDate(date);
					srepo.save(st2);
					return "success";
				}
			}
			else
			{
				return "failed";
			}
			return "Invalid data";
		}
		
		catch(Exception e)
		{
			return e+"";
		}
		
	}
	@PostMapping("/resetpassword")
	String reset(@RequestBody Users u) 
	{
		System.out.println(u);
		try{
			for(Users x:urepo.findAll())
			{
				if(x.getUserId()==u.getUserId()) {
					if(x.getPassword().equals(u.getName())){
						x.setPassword(u.getPassword());
						System.out.println(x);
						urepo.save(x);
						return "success";
					}
					else {
						return "password mismatch";
					}
				}
			}
			return "failed";
		}
		catch(Exception e)
		{
			return "error";
		}
		
	}
	@GetMapping("/allusers")
	List<Users> allusers()
	{
		return urepo.findAll();
	}
	@PostMapping("/getstatment")
	List<Statements> Statment(@RequestBody Users u)
	{
		List<Statements> st= new ArrayList<Statements>();
		try
		{	
//		for(Users x:urepo.findAll())
//		{
//			
//			if(x.getUserId()==u.getUserId() )
//			{
//				x.setPassword(null);
//				x.setEmail(null);
//				return x;
//				
//				
//			}
//		}
			
			for(Statements s:srepo.findAll())
			{	
				if(s.getU().getUserId()==u.getUserId())
				{
					st.add(s);
				}
			}
			return st;
		}
		catch(Exception e)
		{
			System.out.println(e+"");
		}
		return st;
	}
	@GetMapping("/allstatements")
	List<Statements> allstatements()
	{
		//System.out.println("entered");
		System.out.println();
		return srepo.findAll();
	}
	
	@PostMapping("/admindeposit")
	String admindeposit(@RequestBody Users u)
	{
		try
		{
		for(Users x:urepo.findAll())
		{
			
			if(x.getUserId()==u.getUserId() )
			{
				x.setBalance(x.getBalance()+u.getBalance());
				System.out.println(x);
				urepo.save(x);
				
				Statements s=new Statements();
				s.setCredit(u.getBalance());
				s.setRemark("admin deposited");
				s.setBalance(x.getBalance());
				Date date = new Date();
				s.setDate(date);
				s.setU(x);
				srepo.save(s);
				break;
			}
		}
		return "success";
		}
		catch(Exception e)
		{
			return e+"";
		}
	}
	@PostMapping("/adminwithdraw")
	String adminwithdraw(@RequestBody Users u)
	{
		try
		{
		
		
		for(Users x:urepo.findAll())
		{
			
			if(x.getUserId()==u.getUserId() )
			{
				int rx=x.getBalance()-u.getBalance();
				if(rx>=0)
				{
					x.setBalance(rx);
					System.out.println(x);
					urepo.save(x);
					Statements s=new Statements();
					s.setBalance(x.getBalance());
					Date date = new Date();
					s.setDate(date);
					s.setDebit(u.getBalance());
					s.setRemark(" admin withdraw");
					s.setU(x);
					srepo.save(s);
					return "success";	
				}
				
			}
		}
		return "failed";
		
		
		}
		catch(Exception e)
		{
			return e+"";
		}
	}
	
	@PostMapping("/admintransfer")
	String admintransfer(@RequestBody Statements s)
	{
		try {
			Users senderAccount=null;
			Users receiverAcccount=null;
			Statements st=new Statements();
			Statements st2=new Statements();
			
			for(Users x:urepo.findAll())
			{
				System.out.println(x.getUserId()+" "+s.getSender()+" "+s.getReceiver()+" "+s.getDebit());
				if(x.getUserId()==s.getSender()) 
				{
					System.out.println("set");
					senderAccount = x;
				}
				if(x.getUserId()==s.getReceiver()) 
				{
					System.out.println("set");
					receiverAcccount=x;
				}
			}
			System.out.println(senderAccount+" "+receiverAcccount);
			if(senderAccount!=null && receiverAcccount!=null)
			{
				if(senderAccount.getBalance()>=s.getDebit())
				{
					receiverAcccount.setBalance(receiverAcccount.getBalance()+s.getDebit());
					senderAccount.setBalance(senderAccount.getBalance()-s.getDebit());
					urepo.save(senderAccount);
					urepo.save(receiverAcccount);
					
					// SENDER STATEMENT
					st.setU(senderAccount);
					st.setSender(s.getSender());
					st.setReceiver(s.getReceiver());
					st.setDebit(s.getDebit());
					st.setBalance(senderAccount.getBalance());
					st.setRemark(" Admin transfer to "+s.getReceiver());
					Date date = new Date();
					st.setDate(date);
					srepo.save(st);
					//RECEIVER STATEMENT
					st2.setU(receiverAcccount);
					st2.setSender(s.getSender());
					st2.setReceiver(s.getReceiver());
					st2.setCredit(s.getDebit());
					st2.setBalance(receiverAcccount.getBalance());
					st2.setRemark("Admin tranfer from "+s.getSender());
					//Date date = new Date();
					st2.setDate(date);
					srepo.save(st2);
					return "success";
				}
			}
			else
			{
				return "failed";
			}
			return "Invalid data";
		}
		
		catch(Exception e)
		{
			return e+"";
		}
		
	}
	
	@PostMapping("/forgetpassword")
	String forgetpassword(@RequestBody Users u){
		
		try {
			String otp="";
			for(int i=1;i<=4;i++)
			{
				Random r=new Random();
				otp+=r.nextInt(9);
			}
			//return otp;
			//JavaMailSender admin=null;
			//System.out.println("gdhsgzbcvmhfjgdhfgryh");
			SimpleMailMessage message=new SimpleMailMessage();
			for(Users x:urepo.findAll())
			{
				if(x.getUserId()==u.getUserId())
				{
					message.setTo(x.getEmail());
					message.setSubject("OTP GENERATION");
					message.setText("Your OTP is "+ otp);
					System.out.println(message);
					admin.send(message);
					return otp;
				}
			}
			return "user not found";
			//message.setFrom("shanmuspl14@gmail.com");
			
		}
		
		catch(Exception e)
		{
			return "failed";
		}
	}
	@PostMapping("/changepassword")
	String changepassword(@RequestBody Users u) {
		try {
			for(Users x:urepo.findAll())
			{
				if(x.getUserId()==u.getUserId()) {
					x.setPassword(u.getPassword());
					urepo.save(x);
					return "success";
				}
			}
			return "user not found";
		}
		catch(Exception e){
			return"error";
		}
	}
	


}
