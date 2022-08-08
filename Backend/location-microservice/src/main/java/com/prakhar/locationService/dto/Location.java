package com.prakhar.locationService.dto;


import lombok.AllArgsConstructor;
import lombok.Data;

import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
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
