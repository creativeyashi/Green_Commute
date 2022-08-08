package com.greencommute.jobmicroservice.entity;

import com.greencommute.jobmicroservice.VO.Routes;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name="job")
public class Jobs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private String id;

    @Column(name= "title")
    private String title;

    @Column(name= "company_name")
    private String companyName;

    @Column(name= "company_icon")
    private String companyIcon;

    @Column(name= "location")
    private String location;

    @Column(name= "time")
    private String time;

    @Column(name= "distance")
    private String distance;

    @Column(name= "role")
    private String role;

    @Column(name= "category")
    private String category;

    @Column(name= "saved")
    private boolean saved;

    @Column(name= "description")
    private String description;

    @Column(name= "about_the_company")
    private String aboutTheCompany;

    @ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.DETACH, CascadeType.REFRESH})
    @JoinTable(
            name = "job_route",
            joinColumns = @JoinColumn(name = "job_id"),
            inverseJoinColumns = @JoinColumn(name = "route_id")
    )
    private List<Routes> routesList;

    public Jobs(String id, String title, String companyName, String companyIcon, String location, String time, String distance, String role, String category, boolean saved, String description, String aboutTheCompany) {
        this.id = id;
        this.title = title;
        this.companyName = companyName;
        this.companyIcon = companyIcon;
        this.location = location;
        this.time = time;
        this.distance = distance;
        this.role = role;
        this.category = category;
        this.saved = saved;
        this.description = description;
        this.aboutTheCompany = aboutTheCompany;
    }
}
