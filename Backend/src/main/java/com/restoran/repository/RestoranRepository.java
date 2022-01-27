package com.restoran.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.restoran.model.Restoran;

@Repository
public interface RestoranRepository extends JpaRepository<Restoran, Long>{

}
