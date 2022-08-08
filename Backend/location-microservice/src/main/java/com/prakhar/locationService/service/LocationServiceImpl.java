package com.prakhar.locationService.service;


import com.prakhar.locationService.dto.Location;
import com.prakhar.locationService.repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationServiceImpl implements LocationService {

    @Autowired
    private LocationRepository locationRepository;

    public Location savelocation(Location location) {
        return locationRepository.save(location);
    }

    @Override
    public List<Location> fetchAllLocation() {
        return (List<Location>)
                locationRepository.findAll();
    }
    public Location findById(String id) {
        List<Location> locations = locationRepository.findAll();
        Location location = null;

        for(Location loc :locations) {
            if (loc.getId().equals(id)) {
                location = loc;
            }
        }
        return location;

    }

    @Override
    public Location findByName(String name) {
        List<Location> locations = locationRepository.findAll();
        Location location = null;

        for(Location loc:locations){
            if (loc.getLocation().equals(name)){
                location = loc;
            }
        }
        return location;
    }


}
