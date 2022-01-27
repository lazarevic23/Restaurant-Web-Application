package com.restoran.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.restoran.model.Ocena;

@Repository
public interface OcenaRepository extends JpaRepository<Ocena, Long>{

}
