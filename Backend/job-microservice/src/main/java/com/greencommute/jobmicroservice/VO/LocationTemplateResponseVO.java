package com.greencommute.jobmicroservice.VO;

import com.greencommute.jobmicroservice.entity.Jobs;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LocationTemplateResponseVO {

    private Jobs job;
    private Location location;
}