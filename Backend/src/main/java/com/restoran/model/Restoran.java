package com.restoran.model;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Restoran {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String naziv;
	private String adresa;
	private String kontakt;
	@OneToMany(mappedBy = "restoran", fetch = FetchType.EAGER)
	private Set<Sto> stolovi;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNaziv() {
		return naziv;
	}
	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}
	public String getAdresa() {
		return adresa;
	}
	public void setAdresa(String adresa) {
		this.adresa = adresa;
	}
	
	public String getKontakt() {
		return kontakt;
	}
	public void setKontakt(String kontakt) {
		this.kontakt = kontakt;
	}
	public Set<Sto> getStolovi() {
		return stolovi;
	}
	public void setStolovi(Set<Sto> stolovi) {
		this.stolovi = stolovi;
	}
	
	public Restoran()
	{}
	public Restoran(Long id, String naziv, String adresa, String kontakt, Set<Sto> stolovi) {
		super();
		this.id = id;
		this.naziv = naziv;
		this.adresa = adresa;
		this.kontakt = kontakt;
		this.stolovi = stolovi;
		
	}
	
	

}
