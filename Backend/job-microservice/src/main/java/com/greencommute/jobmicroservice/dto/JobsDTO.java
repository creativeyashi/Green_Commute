package com.greencommute.jobmicroservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class JobsDTO {
    private String id;
    private String title;
    private String companyName;
    private String companyIcon;
    private String location;
    private String time;
    private String distance;
    private String role;
    private String category;
    private boolean saved;
    private String description;
    private String aboutTheCompany;

    public JobsDTO() {
        this.id = "0";
    }
}

