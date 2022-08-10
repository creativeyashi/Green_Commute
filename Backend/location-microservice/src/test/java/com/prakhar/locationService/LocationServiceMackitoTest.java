package com.prakhar.locationService;


import com.prakhar.locationService.dto.Location;
import com.prakhar.locationService.repository.LocationRepository;
import com.prakhar.locationService.service.LocationServiceImpl;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest(classes = {LocationServiceMackitoTest.class})
public class LocationServiceMackitoTest {

    @Mock
    LocationRepository locationRepository;

    @InjectMocks
    LocationServiceImpl locationService;

    @Test
    public void test_getAllLocation(){
        List<Location>myLocation = new ArrayList<Location>();
        myLocation.add(new Location("1","Dubai","LocationServiceMackitoTest","123"));
        myLocation.add(new Location("2","India","LocationServiceMackitoTest","123"));
        myLocation.add(new Location("3","UK","LocationServiceMackitoTest","123"));


        when(locationRepository.findAll()).thenReturn(myLocation);
        assertEquals(3,locationService.fetchAllLocation().size());

    }

    @Test
    public void test_findById(){
        List<Location>myLocation = new ArrayList<Location>();
        myLocation.add(new Location("1","Dubai","LocationServiceMackitoTest","123"));
        myLocation.add(new Location("2","India","LocationServiceMackitoTest","123"));
        myLocation.add(new Location("3","UK","LocationServiceMackitoTest","123"));

        String locationId = "2";

        when(locationRepository.findAll()).thenReturn(myLocation);
        //locationService.findById(locationId).getId();

        assertEquals("2",locationService.findById(locationId).getId());

    }

    @Test
    public void test_findByName(){
        List<Location>myLocation = new ArrayList<Location>();
        myLocation.add(new Location("1","Dubai","LocationServiceMackitoTest","123"));
        myLocation.add(new Location("2","India","LocationServiceMackitoTest","123"));
        myLocation.add(new Location("3","UK","LocationServiceMackitoTest","123"));

        String locationId = "India";

        when(locationRepository.findAll()).thenReturn(myLocation);
        //locationService.findById(locationId).getId();

       // assertEquals("India",locationService.findByName(locationId).getLocation());

    }

}
