package com.prakhar.locationService;

import com.prakhar.locationService.controller.LocationController;
import com.prakhar.locationService.dto.Location;
import com.prakhar.locationService.service.LocationServiceImpl;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest(classes = {LocationControllerTest.class})
public class LocationControllerTest {

    @Mock
    LocationServiceImpl locationService;

    @InjectMocks
    LocationController controller;

    List<Location> myLocation;
    Location location;

    @Test
    public void test_allLocation(){

        myLocation = new ArrayList<Location>();
        myLocation.add(new Location("1","India","ASDAD","678"));
        myLocation.add(new Location("2","Pak","ASDAD","678"));

        when(locationService.fetchAllLocation()).thenReturn(myLocation);
        ResponseEntity<List<Location>>  res = controller.allLocation();

        assertEquals(HttpStatus.FOUND,res.getStatusCode());
        assertEquals(2,res.getBody().size());
    }


    @Test
    public void test_getLocationById(){
        location = new Location("1","India","ASDAD","678");
        String locationId = "1";

        when(locationService.findById(locationId)).thenReturn(location);
        ResponseEntity<Location> res = controller.getLocationById(locationId);

        assertEquals(HttpStatus.FOUND,res.getStatusCode());
        assertEquals(locationId,res.getBody().getId());
    }

@Test
    public void test_getLocationByName(){
        location = new Location("1","India","ASDAD","678");
        String locationName = "India";

        when(locationService.findByName(locationName)).thenReturn(location);
        ResponseEntity<Location> res = controller.getLocationByName(locationName);

        assertEquals(HttpStatus.FOUND,res.getStatusCode());
        assertEquals(locationName,res.getBody().getLocation());
    }






}
