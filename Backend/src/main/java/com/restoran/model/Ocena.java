package com.restoran.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Ocena {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@ManyToOne
	private Klijent klijent;
	private double ocena;
	@ManyToOne
	private Restoran restoran;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Klijent getKlijent() {
		return klijent;
	}
	public void setKlijent(Klijent klijent) {
		this.klijent = klijent;
	}
	public double getOcena() {
		return ocena;
	}
	public void setOcena(double ocena) {
		this.ocena = ocena;
	}
	public Restoran getRestoran() {
		return restoran;
	}
	public void setRestoran(Restoran restoran) {
		this.restoran = restoran;
	}
	
	public Ocena() {
		
	}
	public Ocena(Long id, Klijent klijent, double ocena, Restoran restoran) {
		super();
		this.id = id;
		this.klijent = klijent;
		this.ocena = ocena;
		this.restoran = restoran;
	}
	
}
