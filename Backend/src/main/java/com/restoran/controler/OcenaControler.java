package com.restoran.controler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.restoran.model.Ocena;
import com.restoran.service.OcenaService;

@RestController
public class OcenaControler {

	@Autowired
	OcenaService ocenaService;
	
	@RequestMapping(value = "api/ocena/{id}", method = RequestMethod.GET)
	public  ResponseEntity<Double> averageOcena(@PathVariable Long id)
	{
		//daj mi sve ocene
		List<Ocena> ocene = ocenaService.findAll();
		double sumaOcena = 0;
		int brojOcena = 0;
		
		//saberi ocene od restorana sa tim id
		for (Ocena jednaOcena : ocene)
		{
			if (jednaOcena.getRestoran().getId().equals(id))
			{
				sumaOcena += jednaOcena.getOcena();
				brojOcena++;
			}
			
		}
		
		//izracunaj prosek
		Double prosek = sumaOcena/brojOcena;
		return new ResponseEntity<>(prosek, HttpStatus.OK);
		
	}
	
	@RequestMapping(value = "api/ocena", method = RequestMethod.POST)
	public ResponseEntity<Ocena> createOcena(@RequestBody Ocena o)
	{
		Ocena ocena = new Ocena();
		ocena.setOcena(o.getOcena());
		ocena.setRestoran(o.getRestoran());
		Ocena sacuvanaOcena = ocenaService.save(ocena);
		return new ResponseEntity<>(sacuvanaOcena, HttpStatus.CREATED);
	}
	
	
	
	
}
