package com.restoran.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.restoran.model.Sto;
import com.restoran.repository.StoRepository;

@Component
public class StoService {

	@Autowired
	StoRepository stoRepository;
	
	public List<Sto> findAll()
	{
		return stoRepository.findAll();
	}
	
	public Sto findById(Long id)
	{
		return stoRepository.findById(id).get();
	}
	
	public Sto save(Sto sto)
	{
		return stoRepository.save(sto);
	}
	
	public void remove(Long id)
	{
		stoRepository.deleteById(id);
	}
}

