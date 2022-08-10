package com.prakhar.locationService.dto;


import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Setter(AccessLevel.NONE)
    private String id;
    private String location;
    @Column(name = "fulladdress")
    private String fullAddress;
    private String aqi;

}
