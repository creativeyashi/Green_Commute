package com.greencommute.routesmicroservice.routes.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="routes")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Route {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    @Setter(AccessLevel.NONE)
    private int routeId;

    @Column(name="route")
    private String routeName;

    public Route(String routeName){
        this.routeName = routeName;
    }
}
