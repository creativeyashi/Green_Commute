package com.prakhar.locationService.service;


import com.prakhar.locationService.dto.Location;
import com.prakhar.locationService.repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LocationServiceImpl implements LocationService {

    @Autowired
    private LocationRepository locationRepository;


    @Override
    public List<Location> fetchAllLocation() {
        return (List<Location>)
                locationRepository.findAll();
    }
    public Location findById(String id) {
        Optional<Location> locations = locationRepository.findById(id);
        Location location = locations.get();

        return location;

    }

    @Override
    public Location findByName(String name) {
        Location location =  locationRepository.findByName(name);
        return location;
    }


}
