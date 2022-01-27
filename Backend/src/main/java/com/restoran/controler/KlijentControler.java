package com.restoran.controler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.restoran.model.Klijent;
import com.restoran.model.Restoran;
import com.restoran.repository.KlijentRepository;
import com.restoran.service.KlijentService;

@RestController
public class KlijentControler {

	@Autowired
	KlijentService klijentService;
	
	@RequestMapping(value = "api/klijenti/{id}", method = RequestMethod.GET)
	public ResponseEntity<Klijent> getKlijent(@PathVariable Long id)
	{
		Klijent klijent = klijentService.findById(id);
		return new ResponseEntity<>(klijent, HttpStatus.OK);
	}
	
	@RequestMapping(value = "api/klijenti/{email}/sifra/{sifra}", method = RequestMethod.GET)
	public ResponseEntity<Klijent> logovanje(@PathVariable String email, @PathVariable String sifra)
	
	{
		Klijent klijent = klijentService.findByEmail(email);
		
		if(klijent == null)
		{
			return new ResponseEntity<Klijent>(HttpStatus.LOCKED); //nemam korisnika sa tim emailom
		}
		
		if(!klijent.getLozinka().equals(sifra))
		{
			return new ResponseEntity<Klijent>(HttpStatus.LOCKED); //los password unet
		}
		
		return new ResponseEntity<>(klijent, HttpStatus.OK);
	}
	@RequestMapping(value = "api/klijenti", method = RequestMethod.POST)
	public ResponseEntity<Klijent> create(@RequestBody Klijent k)
	{
		Klijent klijent = new Klijent();
		klijent.setImeIPrezime(k.getImeIPrezime());
		klijent.setEmail(k.getEmail());
		klijent.setLozinka(k.getLozinka());
		klijent.setVrstaKlijenta(k.getVrstaKlijenta());
		
		Klijent sacuvaniklijent = klijentService.save(klijent);
		return new ResponseEntity<>(sacuvaniklijent, HttpStatus.CREATED);
	}
	
	
	}
