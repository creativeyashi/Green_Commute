package com.prakhar.locationService.controller;

import com.prakhar.locationService.dto.Location;
import com.prakhar.locationService.repository.LocationRepository;
import com.prakhar.locationService.service.LocationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/location")
public class LocationController {

    @Autowired
    private LocationServiceImpl locationService;

    @Autowired
    private LocationRepository locationRepository;

    @PostMapping("/")
    public Location savelocation(@RequestBody Location location){
        return locationService.savelocation(location);
    }

    @GetMapping("/")
    public ResponseEntity<List<Location>>allLocation(){
        try{
            List<Location> locations = locationService.fetchAllLocation();
            return new ResponseEntity<List<Location>>(locations, HttpStatus.FOUND);
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/{id}")
    public ResponseEntity<Location> getLocationById(@PathVariable(value = "id") String locationId){
        try{
            Location location = locationService.findById(locationId);
            return new ResponseEntity<Location>(location,HttpStatus.FOUND);

        }
        catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/")
    public ResponseEntity<Location> getLocationByName(@RequestParam(value = "location") String locationName){
        try{
            Location location = locationService.findByName(locationName);
            return new ResponseEntity<Location>(location,HttpStatus.FOUND);

        }
        catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
