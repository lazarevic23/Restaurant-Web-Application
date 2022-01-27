package com.restoran.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Sto {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private int brojStola;
	private int brojMesta;
	@JsonIgnore
	@ManyToOne
	private Restoran restoran;
	
	
	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public int getBrojStola() {
		return brojStola;
	}


	public void setBrojStola(int brojStola) {
		this.brojStola = brojStola;
	}


	public int getBrojMesta() {
		return brojMesta;
	}


	public void setBrojMesta(int brojMesta) {
		this.brojMesta = brojMesta;
	}


	public Restoran getRestoran() {
		return restoran;
	}


	public void setRestoran(Restoran restoran) {
		this.restoran = restoran;
	}


	public Sto()
	{}


	public Sto(Long id, int brojStola, int brojMesta, Restoran restoran) {
		super();
		this.id = id;
		this.brojStola = brojStola;
		this.brojMesta = brojMesta;
		this.restoran = restoran;
	}
	
	
	
}
