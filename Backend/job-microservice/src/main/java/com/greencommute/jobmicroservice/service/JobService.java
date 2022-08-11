package com.greencommute.jobmicroservice.service;

import com.greencommute.jobmicroservice.VO.ResposneTemplateVO;
import com.greencommute.jobmicroservice.dto.JobsDTO;
import com.greencommute.jobmicroservice.entity.Jobs;

import java.util.List;
import java.util.Optional;

public interface JobService {
    public List<JobsDTO> findAll();

    List<JobsDTO> findBySavedTrue();

    public Jobs saveJob(Jobs job);

    public void deleteJobs(String id);
    public Optional<Jobs> findById(String id);

    ResposneTemplateVO getAllDetails(String id);
}
