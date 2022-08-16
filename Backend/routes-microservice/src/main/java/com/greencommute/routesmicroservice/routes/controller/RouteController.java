package com.greencommute.routesmicroservice.routes.controller;

import com.greencommute.routesmicroservice.routes.entity.Route;
import com.greencommute.routesmicroservice.routes.exceptions.RouteNotFoundException;
import com.greencommute.routesmicroservice.routes.service.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/routes")
@CrossOrigin
public class RouteController {

    @Autowired
    private RouteService routeService;

    @GetMapping("")
    public List<Route> getRoutes(){
        return routeService.getRoutes();
    }

    @GetMapping("/{routeId}")
    public Route getRoute(@PathVariable int routeId) {
        Route route = routeService.getRoute(routeId);
        if (route == null) {
            throw new RouteNotFoundException("Route id not found - " + routeId);
        }
        return route;
    }
}
