package com.greencommute.jobmicroservice.VO;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Routes {
    @Id
    @Column(name = "id")
    private int id;

    @Column(name = "route")
    private String route;
}
