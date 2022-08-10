package com.greencommute.routesmicroservice.routes;

import com.greencommute.routesmicroservice.routes.controller.RouteController;
import com.greencommute.routesmicroservice.routes.entity.Route;
import com.greencommute.routesmicroservice.routes.exceptions.RouteNotFoundException;
import com.greencommute.routesmicroservice.routes.service.RouteService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(classes={RouteControllerTest.class})
class RouteControllerTest {

    private MockMvc mockMvc;

    @Mock
    private RouteService routeService;

    @InjectMocks
    private RouteController routeController;

    Route route1 = new Route(1,"Bike");
    Route route2 = new Route(2,"Bus");
    Route route3 = new Route(3,"Train");
    Route route4 = new Route(4,"Car");

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(routeController).build();
    }

    @Test
     void getRoutesTest() throws Exception{
        List<Route> routes = new ArrayList<>(Arrays.asList(route1,route2,route3,route4));

        Mockito.when(routeService.getRoutes()).thenReturn(routes);

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/routes")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$",hasSize(4)))
                .andExpect(jsonPath("$[0].routeName",is("Bike")))
                .andExpect(jsonPath("$[1].routeName",is("Bus")))
                .andExpect(jsonPath("$[2].routeName",is("Train")))
                .andExpect(jsonPath("$[3].routeName",is("Car")));
    }

    @Test
    void getRouteTest() throws Exception {
        Mockito.when(routeService.getRoute(route1.getRouteId())).thenReturn(route1);

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/routes/1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$",notNullValue()))
                .andExpect(jsonPath("$.routeName",is("Bike")));
    }

    @Test
    void getRouteNotFoundTest() throws Exception {
       try {
            mockMvc.perform(MockMvcRequestBuilders
                            .get("/routes/100")
                            .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(status().isNotFound());

        }catch(Exception e){
            boolean isContains = e.getMessage().contains("Route id not found - 100");
            assertTrue(isContains);
        }
    }

    @Test
    void getRouteBadRequestTest() throws Exception {
            mockMvc.perform(MockMvcRequestBuilders
                            .get("/routes/abc")
                            .contentType(MediaType.APPLICATION_JSON))
                    .andExpect(status().isBadRequest());
    }




}
