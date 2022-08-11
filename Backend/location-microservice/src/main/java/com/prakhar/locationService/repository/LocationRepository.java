package com.prakhar.locationService.repository;

import com.prakhar.locationService.dto.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LocationRepository extends JpaRepository<Location, String> {
    @Query(value = "SELECT * FROM location WHERE location = ?1", nativeQuery = true)
    Location findByName(String location);




}
