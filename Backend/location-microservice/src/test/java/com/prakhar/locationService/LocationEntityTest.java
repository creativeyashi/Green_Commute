package com.prakhar.locationService;


import com.prakhar.locationService.dto.Location;
import org.junit.jupiter.api.Assertions;
        import org.junit.jupiter.api.Test;
        import org.junit.runner.RunWith;
        import org.springframework.boot.test.context.SpringBootTest;
        import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest(classes = {LocationEntityTest.class})
public class LocationEntityTest
{

    private Location location = new Location();
//    @Test
//    void setLocationIdTest() {
//        location.set("1");
//        Assertions.assertEquals("1", location.getId());
//    }

    @Test
    void setLocationStateTest() {
        location.setLocation("Delhi");
        Assertions.assertEquals("Delhi", location.getLocation());
    }

    @Test
    void setLocationCityTest() {
        location.setFullAddress("New Delhi");
        Assertions.assertEquals("New Delhi", location.getFullAddress());
    }


    @Test
    void setLocationAQIIndexTest() {
        location.setAqi("567");
        Assertions.assertEquals("567", location.getAqi());
    }



}