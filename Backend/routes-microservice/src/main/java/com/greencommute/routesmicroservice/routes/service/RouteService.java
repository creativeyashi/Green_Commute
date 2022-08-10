package com.greencommute.routesmicroservice.routes.service;

import com.greencommute.routesmicroservice.routes.entity.Route;

import java.util.List;

public interface RouteService {

    public List<Route> getRoutes();

    public Route getRoute(int theId);
}
