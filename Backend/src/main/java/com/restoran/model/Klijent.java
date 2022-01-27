package com.restoran.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Klijent {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String imeIPrezime;
	private String email;
	private String lozinka;
	@Enumerated(EnumType.STRING)
	private VrstaKlijenta vrstaKlijenta;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getImeIPrezime() {
		return imeIPrezime;
	}
	public void setImeIPrezime(String imeIPrezime) {
		this.imeIPrezime = imeIPrezime;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getLozinka() {
		return lozinka;
	}
	public void setLozinka(String lozinka) {
		this.lozinka = lozinka;
	}
	

	public VrstaKlijenta getVrstaKlijenta() {
		return vrstaKlijenta;
	}
	public void setVrstaKlijenta(VrstaKlijenta vrstaKlijenta) {
		this.vrstaKlijenta = vrstaKlijenta;
	}
	public Klijent()
	{}
	public Klijent(Long id, String imeIPrezime, String email, String lozinka, VrstaKlijenta vrstaKorisnika) {
		super();
		this.id = id;
		this.imeIPrezime = imeIPrezime;
		this.email = email;
		this.lozinka = lozinka;
		this.vrstaKlijenta = vrstaKorisnika;
	}
	
	
	
}


