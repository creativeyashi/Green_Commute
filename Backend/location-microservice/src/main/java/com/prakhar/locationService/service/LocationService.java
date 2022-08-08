package com.prakhar.locationService.service;

import com.prakhar.locationService.dto.Location;

import java.util.List;

public interface LocationService {


    List<Location> fetchAllLocation();
    Location findById(String id);

    Location findByName(String name);

}
