package com.greencommute.jobmicroservice.service;

import com.greencommute.jobmicroservice.converter.JobsConverter;
import com.greencommute.jobmicroservice.dto.JobsDTO;
import com.greencommute.jobmicroservice.entity.Jobs;
import com.greencommute.jobmicroservice.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobServiceImpl implements JobService{

    @Autowired
    private JobRepository jobRepository;

   @Autowired
   private JobsConverter jobsConverter;
    @Override
    public List<JobsDTO> findAll() {
        return jobsConverter.jobsEntityTodto( jobRepository.findAll()) ;
    }

    @Override
    public List<JobsDTO> findBySavedTrue() {
        return jobsConverter.jobsEntityTodto(jobRepository.findBySavedTrue());
    }

    @Override
    public Jobs saveJob(Jobs job) {
        return jobRepository.save(job);
    }

    @Override
    public void deleteJobs(int id) {
        jobRepository.deleteById(id);
    }

    @Override
    public Optional<Jobs> findById(int id) {
        return jobRepository.findById(id);
    }
}
