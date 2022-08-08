package com.prakhar.locationService.dto;


import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Location {

    @Id
    @GeneratedValue
    private String id;
    private String location;
    @Column(name = "fulladdress")
    private String fullAddress;
    private String aqi;

}
