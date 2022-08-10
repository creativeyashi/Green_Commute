package com.greencommute.routesmicroservice.routes.dao;

import com.greencommute.routesmicroservice.routes.entity.Route;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RouteRepository extends JpaRepository<Route,Integer> {
}
