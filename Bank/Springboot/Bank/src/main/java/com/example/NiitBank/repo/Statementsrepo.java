package com.example.NiitBank.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.NiitBank.model.Statements;

public interface Statementsrepo extends JpaRepository<Statements,Integer>{

}
