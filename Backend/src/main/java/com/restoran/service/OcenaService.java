package com.restoran.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.restoran.model.Ocena;
import com.restoran.repository.OcenaRepository;

@Component
public class OcenaService {

	@Autowired
	OcenaRepository ocenaRepository;
	
	public List<Ocena> findAll()
	{
		return ocenaRepository.findAll();
	}
	
	public Ocena findById(Long id)
	{
		return ocenaRepository.findById(id).get();
	}
	
	public Ocena save(Ocena ocena)
	{
		return ocenaRepository.save(ocena);
	}
	
	public void remove(Long id)
	{
		ocenaRepository.deleteById(id);
	}
	
}
