package com.prakhar.locationService.repository;

import com.prakhar.locationService.dto.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository extends JpaRepository<Location, String> {


}
