package com.restoran.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Rezervacija {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@ManyToOne
	private Sto rezervisanSto;
	@ManyToOne
	private Klijent klijent;
	private String vremeRezervacije;
	@ManyToOne
	private Restoran restoran;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Sto getRezervisanSto() {
		return rezervisanSto;
	}
	public void setRezervisanSto(Sto rezervisanSto) {
		this.rezervisanSto = rezervisanSto;
	}
	public Klijent getKlijent() {
		return klijent;
	}
	public void setKlijent(Klijent klijent) {
		this.klijent = klijent;
	}
	public String getVremeRezervacije() {
		return vremeRezervacije;
	}
	public void setVremeRezervacije(String vremeRezervacije) {
		this.vremeRezervacije = vremeRezervacije;
	}
	public Restoran getRestoran() {
		return restoran;
	}
	public void setRestoran(Restoran restoran) {
		this.restoran = restoran;
	}
	
	public Rezervacija()
	{}
	public Rezervacija(Long id, Sto rezervisanSto, Klijent klijent, String vremeRezervacije, Restoran restoran) {
		super();
		this.id = id;
		this.rezervisanSto = rezervisanSto;
		this.klijent = klijent;
		this.vremeRezervacije = vremeRezervacije;
		this.restoran = restoran;
	}
	
	

}
