package com.restoran.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.restoran.model.Rezervacija;
import com.restoran.repository.RezervacijaRepository;

@Component
public class RezervacijaService {

	@Autowired
	RezervacijaRepository rezervacijaRepository;
	
	public List<Rezervacija> findAll()
	{
		return rezervacijaRepository.findAll();
	}
	
	public Rezervacija findById(Long id)
	{
		return rezervacijaRepository.findById(id).get();
	}
	
	public Rezervacija save(Rezervacija rezervacija)
	{
		return rezervacijaRepository.save(rezervacija);
	}
	
	public void remove(Long id)
	{
		rezervacijaRepository.deleteById(id);
	}
	
	
}
