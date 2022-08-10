package com.greencommute.jobmicroservice.VO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Location {
    @Id
    @Column(name = "id")
    private int id;

    @Column(name = "location")
    private String location;

    @Column(name = "fullAddress")
    private String fullAddress;

    @Column(name = "aqi")
    private String aqi;
}
