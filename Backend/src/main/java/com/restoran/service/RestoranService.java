package com.restoran.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.restoran.model.Restoran;
import com.restoran.repository.RestoranRepository;

@Component
public class RestoranService {

	@Autowired
	RestoranRepository restoranRepository;
	
	public List<Restoran> findAll()
	{
		return restoranRepository.findAll();
	}
	
	public Restoran findById(Long id)
	{
		return restoranRepository.findById(id).get();
	}
	
	public Restoran save(Restoran restoran)
	{
		return restoranRepository.save(restoran);
	}
	
	public void remove(Long id)
	{
		restoranRepository.deleteById(id);
	}
	
}
