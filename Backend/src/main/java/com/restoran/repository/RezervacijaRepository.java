package com.restoran.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.restoran.model.Rezervacija;

@Repository
public interface RezervacijaRepository extends JpaRepository<Rezervacija, Long> {

}
