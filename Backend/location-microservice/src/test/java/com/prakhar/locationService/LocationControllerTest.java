package com.prakhar.locationService;

import com.prakhar.locationService.controller.LocationController;
import com.prakhar.locationService.dto.Location;
import com.prakhar.locationService.service.LocationServiceImpl;
//import jdk.internal.jshell.tool.ConsoleIOContext;
import junit.framework.Assert;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.assertj.core.internal.bytebuddy.matcher.ElementMatchers.is;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(classes = {LocationControllerTest.class})
@AutoConfigureMockMvc
public class LocationControllerTest {

    @Mock
    LocationServiceImpl locationService;

    @InjectMocks
    LocationController controller;

    List<Location> myLocation;
    Optional<Location> location;

    @Autowired
    private MockMvc mockMvc;


    @Test
    public void test_allLocation() throws Exception{

        myLocation = new ArrayList<Location>();
        myLocation.add(new Location("1","India","ASDAD","678"));
        myLocation.add(new Location("2","Pak","ASDAD","678"));

        when(locationService.fetchAllLocation()).thenReturn(myLocation);
        ResponseEntity<List<Location>>  res = controller.allLocation();
        try{
        assertEquals(HttpStatus.FOUND,res.getStatusCode());
        assertEquals(2,res.getBody().size());
        }catch (Exception e){
            Assert.fail("Exception " + e);
        }

    }



    @Test
    void getLocationById() throws Exception {
       Location location = new Location("1", "India", "ASDAD", "678");
        String id="1";

        when(locationService.findById(id)).thenReturn((location))
        ;

        Assertions.assertEquals("India", locationService.findById(id).getLocation());
    }



    @Test
    public void test_getLocationByName() throws Exception{
        Location location = new Location("1","India","ASDAD","678");
        String locationName = "India";

        when(locationService.findByName(locationName)).thenReturn(location);
        ResponseEntity<Location> res = controller.getLocationByName(locationName);

        try {
            assertEquals(HttpStatus.FOUND,res.getStatusCode());
            assertEquals(locationName,res.getBody().getLocation());
        }
        catch (Exception e){
            Assert.fail("Exception " + e);
        }

    }






}
