package com.greencommute.routesmicroservice.routes;

import com.greencommute.routesmicroservice.routes.dao.RouteRepository;
import com.greencommute.routesmicroservice.routes.entity.Route;
import com.greencommute.routesmicroservice.routes.service.RouteService;
import com.greencommute.routesmicroservice.routes.service.RouteServiceImpl;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest(classes={RouteServiceTest.class})
class RouteServiceTest {

    @Mock
    private RouteRepository routeRepository;

    @InjectMocks
    private RouteServiceImpl routeService;

    Route route1 = new Route(1,"Bike");
    Route route2 = new Route(2,"Bus");
    Route route3 = new Route(3,"Train");
    Route route4 = new Route(4,"Car");

    @Test
    void getRoutesTest() throws Exception {
        List<Route> routeList = new ArrayList<>(Arrays.asList(route1,route2,route3,route4));
        Mockito.when(routeRepository.findAll()).thenReturn(routeList);
        assertEquals(4,routeService.getRoutes().size());
    }

    @Test
    void getRouteTest() throws Exception {
        Mockito.when(routeRepository.findById(1)).thenReturn(Optional.of(route1));
        assertEquals(route1,routeService.getRoute(1));
        assertEquals("Bike",routeService.getRoute(1).getRouteName());
    }

}
