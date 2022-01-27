package com.restoran.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.restoran.model.Klijent;
import com.restoran.repository.KlijentRepository;

@Component
public class KlijentService {
	
	@Autowired
	KlijentRepository klijentRepository;
	
	public List<Klijent> findAll()
	{
		return klijentRepository.findAll();
	}
 
	public Klijent findById(Long id)
	{
		return klijentRepository.findById(id).get();
	}
	
	public Klijent save(Klijent klijent)
	{
		return klijentRepository.save(klijent);
	}
	
	public void remove(Long id)
	{
		klijentRepository.deleteById(id);
	}
	
	public Klijent findByEmail(String email)
	{
		return klijentRepository.findByEmail(email);
		
	}
}
