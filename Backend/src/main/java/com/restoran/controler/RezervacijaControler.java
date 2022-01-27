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

import com.restoran.model.Rezervacija;
import com.restoran.service.RezervacijaService;

@RestController
public class RezervacijaControler {

	@Autowired
	RezervacijaService rezervacijaService;
	
	@RequestMapping(value = "api/rezervacija", method = RequestMethod.POST)
	public ResponseEntity<Rezervacija> createRezervacija(@RequestBody Rezervacija r)
	{
		Rezervacija rezervacija = new Rezervacija();
		rezervacija.setVremeRezervacije(r.getVremeRezervacije());
		rezervacija.setKlijent(r.getKlijent());
		rezervacija.setRestoran(r.getRestoran());
		rezervacija.setRezervisanSto(r.getRezervisanSto());
		Rezervacija sacuvanaRezervacija = rezervacijaService.save(rezervacija);
		return new ResponseEntity<>(sacuvanaRezervacija, HttpStatus.CREATED);
	}
	
	
	@RequestMapping(value = "api/rezervacija/{id}/korisnik", method = RequestMethod.GET)
	public ResponseEntity<List<Rezervacija>> vratiRezervacije(@PathVariable Long id)
	{
		List<Rezervacija> lista = new ArrayList<>();
		List<Rezervacija> listaRezervacija =  rezervacijaService.findAll();
		for (Rezervacija rezervacija : listaRezervacija) {
			if(rezervacija.getKlijent().getId().equals(id))
			{
				lista.add(rezervacija);
			}
		}
		return new ResponseEntity<>(lista, HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "api/rezervacija/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteRezervacija(@PathVariable Long id)
	{
		
		rezervacijaService.remove(id);
		return new ResponseEntity<>( HttpStatus.OK);
	}
}
