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

import com.restoran.model.Restoran;
import com.restoran.model.Sto;
import com.restoran.service.RestoranService;
import com.restoran.service.StoService;



@RestController
public class StoControler {

	@Autowired
	StoService stoService;
	@Autowired
	RestoranService restoranService;
	
	@RequestMapping(value = "api/sto", method = RequestMethod.GET)
	public ResponseEntity<List<Sto>> getAllSto()
	{
		List<Sto> stolovi = stoService.findAll();
		return new ResponseEntity<>(stolovi, HttpStatus.OK);
	}
	
	@RequestMapping(value = "api/sto/{id}", method = RequestMethod.GET)
	public ResponseEntity<Sto> getSto(@PathVariable Long id)
	{
		Sto sto = stoService.findById(id);
		return new ResponseEntity<>(sto, HttpStatus.OK);
	}
	
	@RequestMapping(value = "api/sto/{id}/restoran", method = RequestMethod.POST)
	public ResponseEntity<Sto> createSto(@PathVariable Long id, @RequestBody Sto s)
	{
		Sto sto = new Sto();
		sto.setBrojMesta(s.getBrojMesta());
		sto.setBrojStola(s.getBrojStola());
		Restoran restoran = restoranService.findById(id);
		sto.setRestoran(restoran);
		
		Sto sacuvaniSto = stoService.save(sto);
		return new ResponseEntity<>(sacuvaniSto, HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "api/sto/{id}/restoran/{idRestoran}", method = RequestMethod.PUT)
	public ResponseEntity<Sto> updateSto(@RequestBody Sto s, @PathVariable Long id,@PathVariable Long idRestoran)
	{
		Sto sto = stoService.findById(id);
		sto.setBrojMesta(s.getBrojMesta());
		sto.setBrojStola(s.getBrojStola());
		Restoran restoran = restoranService.findById(idRestoran);
		sto.setRestoran(restoran);
		Sto sacuvaniSto = stoService.save(sto);
		return new ResponseEntity<>(sacuvaniSto, HttpStatus.OK);
	}
	
	@RequestMapping(value = "api/sto/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteSto(@PathVariable Long id)
	{
		
		stoService.remove(id);
		return new ResponseEntity<>( HttpStatus.OK);
		
		
	}
	
	
	
}
	

