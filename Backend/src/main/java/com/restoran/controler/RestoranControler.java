package com.restoran.controler;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.restoran.model.Restoran;
import com.restoran.model.Sto;
import com.restoran.service.RestoranService;

@RestController
public class RestoranControler {

	@Autowired
	RestoranService restoranService;
	
	@RequestMapping(value = "api/restorani", method = RequestMethod.GET)
	public ResponseEntity<List<Restoran>> getAllRestoran()
	{
		List<Restoran> restorani = restoranService.findAll();
		return new ResponseEntity<>(restorani, HttpStatus.OK);
	}
	
	@RequestMapping(value = "api/restorani/{id}", method = RequestMethod.GET)
	public ResponseEntity<Restoran> getRestoran(@PathVariable Long id)
	{
		Restoran restoran = restoranService.findById(id);
		return new ResponseEntity<>(restoran, HttpStatus.OK);
	}
	
	@RequestMapping(value = "api/restorani", method = RequestMethod.POST)
	public ResponseEntity<Restoran> createRestoran(@RequestBody Restoran r)
	{
		Restoran restoran = new Restoran();
		restoran.setAdresa(r.getAdresa());
		restoran.setNaziv(r.getNaziv());
		restoran.setKontakt(r.getKontakt());
		Restoran sacuvaniRestoran = restoranService.save(restoran);
		return new ResponseEntity<>(sacuvaniRestoran, HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "api/restorani/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Restoran> updateRestoran(@RequestBody Restoran r, @PathVariable Long id)
	{
		Restoran restoran = restoranService.findById(id);
		restoran.setAdresa(r.getAdresa());
		restoran.setNaziv(r.getNaziv());
		restoran.setKontakt(r.getKontakt());
		Restoran sacuvaniRestoran = restoranService.save(restoran);
		return new ResponseEntity<>(sacuvaniRestoran, HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "api/restorani/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteRestoran(@PathVariable Long id)
	{
		
		restoranService.remove(id);
		
		return new ResponseEntity<>( HttpStatus.OK);
		
		
	}
	@RequestMapping(value = "api/restorani/{id}/prikaziStolove", method = RequestMethod.GET)
	public ResponseEntity<List<Sto>> prikaziStolove(@PathVariable Long id)
	{
		
		Restoran restoran = restoranService.findById(id);
		List<Sto> temp = new ArrayList<Sto>();
		for (Sto stolic : restoran.getStolovi()) {
			temp.add(stolic);
		}
		
		return new ResponseEntity<>(temp, HttpStatus.OK);
		
	}
	
	
	
	
	
}
