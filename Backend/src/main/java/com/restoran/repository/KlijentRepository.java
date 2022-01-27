package com.restoran.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.restoran.model.Klijent;

@Repository
public interface KlijentRepository extends JpaRepository<Klijent, Long>{
	
	public Klijent findByEmail(String email);
	
}
