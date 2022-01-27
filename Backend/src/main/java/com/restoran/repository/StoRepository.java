package com.restoran.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.restoran.model.Sto;

@Repository
public interface StoRepository extends JpaRepository<Sto, Long>{

}
